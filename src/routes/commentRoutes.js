

const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {
  addComment,
  deleteComment,
} = require("../controllers/commentController");

router.post("/:postId", auth, addComment);
router.delete("/:commentId", auth, deleteComment);

module.exports = router;
