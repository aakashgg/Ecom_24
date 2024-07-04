import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, "hellojwtsecret", {
        expiresIn: '1d'
    });

    // Set JWT as HTTP-only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: false, // Not using HTTPS in development mode
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 1 day 
    });


}
export default generateToken; 