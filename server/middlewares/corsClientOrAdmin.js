const cors = require("cors");

const allowList = process.env.NODE_ENV === "development" ? ["http://localhost:5173", "http://localhost:5174"] : [process.env.CLIENT_ORIGIN, process.env.ADMIN_ORIGIN];
const origin = (origin, cb) => {
    if (allowList.indexOf(origin) !== -1) {
        return cb(null, true);
    }
    return cb(null, false);
}
const corsClientOrAdmin = () => cors({ origin });

module.exports = corsClientOrAdmin;