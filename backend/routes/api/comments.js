/**
 * Comments API router
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * GET /
 * Retrieves all comments from the database
 * @async
 * @route {GET} /
 * @returns {Object[]} Array of comment objects
 * @throws {Object} 500 - Failed to fetch comments
 */

/**
 * DELETE /:id
 * Deletes a comment by its ID
 * @async
 * @route {DELETE} /:id
 * @param {string} id - The comment ID to delete
 * @returns {Object} Success message
 * @throws {Object} 500 - Failed to delete comment
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        const commentId = req.params.id;
        await Comment.findByIdAndDelete(commentId);
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});