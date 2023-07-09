const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const asyncHandler = require("../middlewares/asyncHandler");

const createUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const salt = await bcryptjs.genSalt(12);
    bcryptjs.hash(password, salt, async (err, passwordHash) => {
        if (err) {
            return res.sendStatus(500);
        }
        await User.create({ firstName, lastName, email, password: passwordHash });
        res.json({ message: "User created" });
    });
});

const validateUser = [
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Email doesn't conform to its format"),
    body("password").notEmpty().withMessage("Password is required"),
]

const login = [
    ...validateUser,
    asyncHandler(async (req, res) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) {
                bcryptjs.compare(password, user.password, (err, isEqual) => {
                    if (err) {
                        return res.sendStatus(500);
                    }
                    else if (isEqual) {
                        const token = jwt.sign({ id: user._id }, process.env.SECRET);
                        res.json({ token, user: { firstName: user.firstName, lastName: user.lastName, email: user.email } });
                    }
                    else {
                        res.status(401).json({ message: "Incorrect password" });
                    }
                })
            }
            else {
                res.status(404).json({ message: "No such user exists" });
            }
        }
        else {
            res.status(403).json({ errors: result.array()[0] });
        }
    })
]

module.exports = { createUser, login };
