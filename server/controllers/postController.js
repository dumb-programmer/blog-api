const { body, validationResult } = require("express-validator");
const isAuthenticated = require("../middlewares/isAuthenticated");
const Post = require("../models/post");
const asyncHandler = require("../middlewares/asyncHandler");
const verifyToken = require("../middlewares/verifyToken");
const corsAdmin = require("../middlewares/corsAdmin");

const getPosts = [
    asyncHandler(verifyToken),
    asyncHandler(async (req, res) => {
        const { fields } = req.query;
        const projection = fields && fields.split(",").map(field => ({ [field]: 1 })).reduce((prevVal, currentVal) => {
            return ({ ...prevVal, ...currentVal });
        }, {}) || null;
        const find = !req.user && { isPublished: true } || null;
        const posts = await Post.find(find, projection).sort({ createdAt: -1 });
        res.json(posts);
    })
];

const getPost = [
    asyncHandler(verifyToken),
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { fields } = req.query;
        const projection = fields && fields.split(",").map(field => ({ [field]: 1 })).reduce((prevVal, currentVal) => {
            return ({ ...prevVal, ...currentVal });
        }, {}) || null;
        const post = await Post.findById(postId, projection);
        if (post && (post.isPublished || req.user)) {
            res.json(post);
        }
        else {
            res.status(404).json({ message: "Post not found" });
        }
    })
];

const validatePost = [
    body("title").escape().notEmpty().withMessage("Title is required").isLength({ max: 100 }).withMessage("Title cannot be greater than 100 characters"),
    body("publish").notEmpty().withMessage("Publish is required").isBoolean().withMessage("Publish must be a boolean"),
]

const createPost = [
    corsAdmin(),
    isAuthenticated,
    ...validatePost,
    asyncHandler(async (req, res) => {
        const { title, body, publish } = req.body;
        const result = validationResult(req);
        if (result.isEmpty()) {
            await Post.create({ title, body, author: req.user._id, isPublished: publish === "on" });
            res.json({ message: "Post created" });
        }
        else {
            res.status(400).json({ errors: result.array() });
        }
    })
];

const updatePost = [
    corsAdmin(),
    isAuthenticated,
    ...validatePost,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { title, body, publish } = req.body;
        const result = validationResult(req);
        if (result.isEmpty()) {
            await Post.findByIdAndUpdate(postId, { title, body, isPublished: publish });
            res.json({ message: "Post was updated" });
        }
        else {
            res.status(400).json({ errors: result.array() });
        }
    })
];

const publishPost = [
    corsAdmin(),
    isAuthenticated,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        await Post.findByIdAndUpdate(postId, { isPublished: true });
        res.json({ message: "Post published" });
    })
];

const unpublishPost = [
    corsAdmin(),
    isAuthenticated,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        await Post.findByIdAndUpdate(postId, { isPublished: false });
        res.json({ message: "Post unpublished" });
    })
];

const deletePost = [
    corsAdmin(),
    isAuthenticated,
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        await Post.findByIdAndDelete(postId);
        res.json({ message: "Post was deleted" });
    })
];

module.exports = { getPosts, getPost, createPost, updatePost, publishPost, unpublishPost, deletePost };