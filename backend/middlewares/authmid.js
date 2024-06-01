import jwt from "jsonwebtoken";
import User from "../models/userSchema.js"
export const requireSignIn = async (req, res, next) => {
    const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
    req.user = decode;
    next();
    try {

    } catch (error) {
        console.log(error)
    }
};
export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role !== 1) {
            res.status(401).send({
                success: false,
                message: "Unauthorized"
            });
        } else next();
    } catch (error) {
        console.log(error);

    }
}