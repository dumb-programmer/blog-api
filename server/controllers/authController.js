const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const salt = await bcryptjs.genSalt(12);
    bcryptjs.hash(password, salt, async (err, passwordHash) => {
        if (err) {
            return res.sendStatus(500);
        }
        await User.create({ firstName, lastName, email, password: passwordHash });
        res.json({ message: "User created" });
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        bcryptjs.compare(password, user.password, (err, isEqual) => {
            if (err) {
                return res.sendStatus(500);
            }
            else if (isEqual) {
                const token = jwt.sign({ id: user._id }, process.env.SECRET);
                res.json({ token });
            }
            else {
                res.status(401).json({ message: "Incorrect password" });
            }
        })
    }
    else {
        res.status(401).json({ message: "No such user exists" });
    }
};

const logout = (req, res) => {

};

module.exports = { createUser, login, logout };