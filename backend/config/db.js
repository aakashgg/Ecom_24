import mongoose from "mongoose";
import color from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://mynameaakash46:WqWmTaZq0jisQ0Qh@cluster0.txhdsuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB Connected : ${conn.connection.host}`.yellow.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }

}
export default connectDB; 