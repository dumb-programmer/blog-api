const isAuthenticated = require("../middlewares/isAuthenticated");
const Comment = require("../models/comment");

const getComments = async (req, res) => {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId });
    res.json(comments);
};

const createComment = async (req, res) => {
    const { postId } = req.params;
    const { name, body } = req.body;
    await Comment.create({ name, body, post: postId });
    res.json({ message: "Comment created" });
};

const deleteComment = [
    isAuthenticated,
    async (req, res) => {
        const { commentId } = req.params;
        await Comment.findByIdAndDelete(commentId);
        res.json({ message: "Comment was deleted" });
    }
]

module.exports = { getComments, createComment, deleteComment };