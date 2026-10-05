const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/signup", async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        const user = new User({
            name,
            email,
            phone,
            password
        });

        await user.save();

        res.status(201).json({
            message: "Signup successful",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        });

    } catch (error) {
        console.error("SIGNUP ERROR:", error);

        if (error.code === 11000) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

        res.status(500).json({
            message: "Signup failed",
            error: error.message
        });
    }
});

module.exports = router;
