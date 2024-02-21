import mongoose from "mongoose";

import {DB_NAME} from "../constants.js"
const connectDB=async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongodb connect: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("mongoDb error: "  ,error);
        process.exit(1)

    }
}
export default connectDB;