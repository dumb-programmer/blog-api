const cors = require("cors");

const corsAdmin = () => cors({ origin: process.env.NODE_ENV === "development" ? "http://localhost:5174" : process.env.ADMIN_ORIGIN });

module.exports = corsAdmin;