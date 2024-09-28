import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://arvindVlogs:6374158350@cluster0.54hn1sy.mongodb.net/food-del')
    .then(()=>{
        console.log("DB Connected")
    })
}