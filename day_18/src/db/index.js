import mongoose, { mongo } from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDb = async ()=>{
    try {
        
      const conncetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n Mongo DB is connected Successfully ${conncetionInstance.connection.host} `);

    } catch (error) {
        console.log("Mongo DB conncetion error:", error);
        process.exit(1);
    }
}

export default connectDb;