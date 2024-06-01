import { comparePassword, hashPassword } from "../middlewares/bcrypt.js";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const registerController = async (req, res) => {
    try {
        const { name, email, password, address, phone } = req.body;

        if (!name || !email || !password || !address || !phone) {
            return res.status(400).send({
                success: false,
                message: "Please enter all details"
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send({
                success: false,
                message: "User already exists with this email"
            });
        }

        const hashedPassword = await hashPassword(password);
        const user = new User({ name, email, password: hashedPassword, address, phone });
        await user.save();

        return res.status(201).send({
            success: true,
            message: "Registered Successfully",
            user
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error
        });
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Please enter all details"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send({
                success: false,
                message: "User not found, please sign up"
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).send({
                success: false,
                message: "Incorrect password"
            });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                address: user.address,
            },
            token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Error in login",
            error
        });
    }
};

const testController = (req, res) => {
    res.send("test route");
};

export { registerController, loginController, testController };
