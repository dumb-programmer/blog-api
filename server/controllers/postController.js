const { body, validationResult } = require("express-validator");
const isAuthenticated = require("../middlewares/isAuthenticated");
const Post = require("../models/post");

const getPosts = async (req, res) => {
    const { fields } = req.query;
    const projection = fields && fields.split(",").map(field => ({ [field]: 1 })).reduce((prevVal, currentVal) => {
        return ({ ...prevVal, ...currentVal });
    }, {}) || null;
    const posts = await Post.find(null, projection).sort({ createdAt: -1 });
    res.json(posts);
};

const getPost = async (req, res) => {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (post) {
        res.json(post);
    }
    else {
        res.status(404).json({ message: "Post not found" });
    }
};

const validatePost = [
    body("title").escape().notEmpty().withMessage("Title is required").isLength({ max: 100 }).withMessage("Title cannot be greater than 100 characters"),
]

const createPost = [
    isAuthenticated,
    ...validatePost,
    async (req, res) => {
        const { title, body } = req.body;
        const result = validationResult(req);
        if (result.isEmpty()) {
            await Post.create({ title, body, author: req.user._id });
            res.json({ message: "Post created" });
        }
        else {
            res.status(400).json({ errors: result.array() });
        }
    },
]

const updatePost = [
    isAuthenticated,
    ...validatePost,
    async (req, res) => {
        const { postId } = req.params;
        const { title, body } = req.body;
        const result = validationResult(req);
        if (result.isEmpty()) {
            await Post.findByIdAndUpdate(postId, { title, body });
            res.json({ message: "Post was updated" });
        }
        else {
            res.status(400).json({ errors: result.array() });
        }
    }
]

const deletePost = [
    isAuthenticated,
    async (req, res) => {
        const { postId } = req.params;
        await Post.findByIdAndDelete(postId);
        res.json({ message: "Post was deleted" });
    }
]

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };