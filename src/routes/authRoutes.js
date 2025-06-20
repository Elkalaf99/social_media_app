const express = require("express");
const router = express.Router();
const {
  register,
  login,
  updateProfile,
  softDelete,
  getAllUsers,
} = require("../controllers/authController");
const auth = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.put("/profile", auth, updateProfile);
router.delete("/delete", auth, softDelete);
router.get("/users", auth, getAllUsers);

module.exports = router;
