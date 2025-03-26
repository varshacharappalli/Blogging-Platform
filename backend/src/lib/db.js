import mongoose from "mongoose";

export const mongo_db = async () => {
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/blogging_platform"); 
        console.log("Database successfully connected.");
    } catch (err) {
        console.log("Database couldn't be connected successfully.");
        console.log(err.message);
    }
};
