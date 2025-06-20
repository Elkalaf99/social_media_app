

const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
} = require("../controllers/postController");

router.post("/", auth, createPost);
router.get("/", auth, getAllPosts);
router.get("/:id", auth, getPostById);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.post("/:id/like", auth, likePost);
router.post("/:id/unlike", auth, unlikePost);

module.exports = router;
