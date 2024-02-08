const express = require("express");
const postRouter = express.Router();

postRouter.route("/").get((req, res) => {
  res.json({
    message: "All posts fetched",
  });
});

postRouter
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    res.json({
      message: `Post with id ${id} fetched`,
    });
  })
  .put((req, res) => {
    const { id } = req.params;
    res.json({
      message: `Post with id ${id} updated`,
    });
  })
  .delete((req, res) => {
    const { id } = req.params;
    res.json({
      message: `Post with id ${id} deleted`,
    });
  });
module.exports = postRouter;
