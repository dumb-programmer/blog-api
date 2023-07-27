const cors = require("cors");

console.log(process.env.NODE_ENV);
const corsAdmin = () => cors({ origin: process.env.NODE_ENV === "development" ? "http://localhost:5174" : process.env.ADMIN_ORIGIN });

module.exports = corsAdmin;