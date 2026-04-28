const router = require("express").Router();

const {
  getDashboard
} = require("../controllers/adminController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.get("/dashboard", auth, admin, getDashboard);

module.exports = router;