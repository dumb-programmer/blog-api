require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const RateLimit = require("express-rate-limit");
const mongoose = require("mongoose");

const corsClientOrAdmin = require("./middlewares/corsClientOrAdmin");

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

app.use(express.json({ limit: "800mb" }));
app.use(helmet());
app.use(compression());
app.use(corsClientOrAdmin());
if (process.env.NODE_ENV === "production") {
    app.use(RateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        max: 20,
    }));
}

const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: "Invalid route" });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: "An error occurred" });
    if (process.env.NODE_ENV === "development") {
        console.error(err);
    }
});

app.listen(process.env.PORT, () => console.log(`Server listening on port: ${process.env.PORT}`));

module.exports = app;
