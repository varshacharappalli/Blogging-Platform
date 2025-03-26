import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    if (!process.env.SECRET_KEY) {
        console.error("SECRET_KEY is not defined in environment variables.");
        return res.status(500).json({ message: "Internal Server Error: Secret Key Missing" });
    }

    const token = jwt.sign({ userId }, process.env.SECRET_KEY, { expiresIn: "7d" });

    console.log("Generated Token:", token); // Debugging Line

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        sameSite: "Strict",
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
};
