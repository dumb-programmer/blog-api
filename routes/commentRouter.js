const router = require("express").Router({ mergeParams: true });

const commentController = require("../controllers/commentController");

router.get("/", commentController.getComments);
router.post("/", commentController.createComment);

router.delete("/:commentId", commentController.deleteComment);

module.exports = router;