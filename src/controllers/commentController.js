

const Comment = require("../models/Comment");
const Post = require("../models/Post");

const addComment = async (req, res, next) => {
  try {
    const { content } = req.body;
    const { postId } = req.params;
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const comment = new Comment({
      content,
      author: req.user._id,
      post: postId,
    });
    await comment.save();
    post.comments.push(comment._id);
    await post.save();
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    const post = await Post.findById(comment.post);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (
      comment.author.toString() !== req.user._id.toString() &&
      post.author.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }
    await comment.deleteOne();
    post.comments = post.comments.filter((cId) => cId.toString() !== commentId);
    await post.save();
    res.json({ message: "Comment deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { addComment, deleteComment };
