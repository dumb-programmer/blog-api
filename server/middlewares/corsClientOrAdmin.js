const cors = require("cors");

const origin = process.env.NODE_ENV === "development" ? ["http://localhost:5173", "http://localhost:5174"] : [process.env.CLIENT_ORIGIN, process.env.ADMIN_ORIGIN];
const corsClientOrAdmin = () => cors({ origin });

module.exports = corsClientOrAdmin;