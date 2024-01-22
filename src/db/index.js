import mongoose from "mongoose";
import { database_name } from "../constants.js";

const connectdb=async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${database_name}`);
       console.log(`\n mongodb connected successfully ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }

}

export default connectdb