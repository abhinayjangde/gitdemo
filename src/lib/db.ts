import mongoose from "mongoose";
import env from "../config/env.js";


const db = async () => {
    try {
        await mongoose.connect(env.mongodb_url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

export default db;