import mongoose from "mongoose";
const ConnectionDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("Connected");
    } catch (error) {
        console.log("Error Connecting DB", error);
    }
};

export default ConnectionDB;