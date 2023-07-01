require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const RateLimit = require("express-rate-limit");
const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connection established");
    }
    catch (error) {
        console.error("Couldn't connect to database");
    }
})();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 20,
}));

const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: "Invalid route" });
});

app.listen(process.env.PORT, () => console.log(`Server listening on port: ${process.env.PORT}`));