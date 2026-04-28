const router = require("express").Router();

const {
  registerUser,
  loginUser,
  getProfile
} = require("../controllers/userController");

const auth = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", auth, getProfile);
router.get("/", async (req,res) => {

 const users =
   await User.find()
   .select("-password");

 res.json(users);

});

module.exports = router;