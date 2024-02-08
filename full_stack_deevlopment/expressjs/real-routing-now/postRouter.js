const express = require("express");

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.json({
    message: "All posts fetched",
  });
});

postRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Post with id ${id} fetched`,
  });
});

// Update post
postRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Post with id ${id} updated`,
  });
}); // Delete post

postRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Post with id ".concat(id, " deleted"),
  });
});

module.exports = postRouter;
