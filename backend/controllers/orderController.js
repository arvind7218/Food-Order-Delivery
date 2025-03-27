import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js';
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = "https://food-express-tlcj.onrender.com";

  try {
    // Calculate the total amount of the order from the items
    const totalAmount = req.body.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryCharges = 9; // Fixed delivery charges
    const grandTotal = totalAmount + deliveryCharges;

    // Create new order in the database
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: grandTotal, // Store the calculated total amount
      address: req.body.address // Ensure the address is saved properly
    });

    await newOrder.save();

    // Clear the user's cart after placing the order
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Stripe line items for each product in the order
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name
        },
        unit_amount: item.price * 100 // Convert to cents/paise and apply conversion factor
      },
      quantity: item.quantity
    }));

    // Add delivery charges to line items
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges"
        },
        unit_amount: deliveryCharges * 100 // Convert to paise (assuming 1 INR = 80 paise)
      },
      quantity: 1
    });

    // Create Stripe checkout session 
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error"
    });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({
        success: true,
        message: "Paid"
      })
    }
    else {
      await orderModel.findByIdAndDelete(orderId);   
      res.json({
        success: false,
        message: "Not Paid"
      })
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error"
    })
  }
}

// user order for frondend

const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({
      success: true,
      data: orders
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error"
    })

  }

}

// listing orders for admin panel

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({
      success: true,
      data: orders
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: true,
      message: "Error"
    })

  }
}
// api for updating order status 

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status })
    res.json({
      success: true,
      message: "Status Updated"
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error"
    })

  }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
