const { body, validationResult } = require("express-validator");
const isAuthenticated = require("../middlewares/isAuthenticated");
const Comment = require("../models/comment");
const asyncHandler = require("../middlewares/asyncHandler");
const corsAdmin = require("../middlewares/corsAdmin");

const getComments = asyncHandler(async (req, res) => {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId });
    res.json(comments);
});

const validateComment = [
    body("name").escape().notEmpty().withMessage("Name is required").isLength({ max: 50 }).withMessage("Name cannot be greater than 50 characters"),
    body("body").escape().notEmpty().withMessage("Comment is required").isLength({ max: 200 }).withMessage("Comment cannot be greater than 200 characters")
]

const createComment = [
    ...validateComment,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { name, body } = req.body;
        const result = validationResult(req);
        if (result.isEmpty()) {
            await Comment.create({ name, body, post: postId });
            res.json({ message: "Comment created" });
        }
        else {
            res.status(400).json({ errors: result.array() });
        }
    })
]

const deleteComment = [
    corsAdmin(),
    isAuthenticated,
    asyncHandler(async (req, res) => {
        const { commentId } = req.params;
        await Comment.findByIdAndDelete(commentId);
        res.json({ message: "Comment was deleted" });
    })
]

module.exports = { getComments, createComment, deleteComment };