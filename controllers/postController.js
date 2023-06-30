const isAuthenticated = require("../middlewares/isAuthenticated");
const Post = require("../models/post");

const getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

const getPost = async (req, res) => {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    res.json(post);
};

const createPost = [
    isAuthenticated,
    async (req, res) => {
        const { title, body } = req.body;
        await Post.create({ title, body, author: req.user._id });
        res.json({ message: "Post created" });
    },
]

const updatePost = [
    isAuthenticated,
    async (req, res) => {
        const { postId } = req.params;
        const { title, body } = req.body;
        await Post.findByIdAndUpdate(postId, { title, body });
        res.json({ message: "Post was updated" });
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