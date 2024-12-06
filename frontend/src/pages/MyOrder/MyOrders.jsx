import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrder = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState(() => {
    // Load the orders from localStorage on component mount
    const savedData = localStorage.getItem('myOrders');
    try {
      return savedData ? JSON.parse(savedData) : []; // Return empty array if no saved data or invalid data
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return []; // Return empty array in case of error
    }
  });
  const [loading, setLoading] = useState(true);  // To handle loading state

  const fetchOrders = async () => {
    try {
      setLoading(true); // Start loading when fetching begins
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
      setData(response.data.data);
      localStorage.setItem('myOrders', JSON.stringify(response.data.data)); // Save fetched data to localStorage
      setLoading(false);  // Stop loading after data is fetched
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false); // Stop loading even if there is an error
    }
  };

  useEffect(() => {
    // Fetch orders on component mount
    fetchOrders();
  }, [url, token]); // Trigger re-fetch if `url` or `token` change

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      {loading ? (
        <p>Loading...</p> // Display loading state while fetching orders
      ) : (
        <div className="container">
          {data.length > 0 ? (
            data.map((order, index) => (
              <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="Parcel Icon" />

                <p>
                  {order.items && Array.isArray(order.items) && order.items.length > 0 ? (
                    order.items.map((item, itemIndex) => (
                      <span key={itemIndex}>
                        {item.name} x {item.quantity}
                        {itemIndex < order.items.length - 1 && ', '}
                      </span>
                    ))
                  ) : (
                    <span>No items in this order</span>
                  )}
                </p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items ? order.items.length : 0}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick={fetchOrders}>Track Order</button>
              </div>
            ))
          ) : (
            <p>No orders available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
