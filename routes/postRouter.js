const router = require("express").Router();

const postController = require("../controllers/postController");

router.get("/", postController.getPosts);
router.post("/", postController.createPost);

router.get("/:postId", postController.getPost);
router.put("/:postId", postController.updatePost);
router.delete("/:postId", postController.deletePost);

module.exports = router;