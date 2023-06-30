const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/signup", authController.createUser);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

module.exports = router;