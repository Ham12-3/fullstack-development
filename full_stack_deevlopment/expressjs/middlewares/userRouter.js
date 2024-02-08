const express = require("express");
const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
  res.json({
    message: "Allu sers fethched",
  });
});

userRouter
  .route("/:id")
  .get((req, res) => {
    const { id } = req.params;
    res.json({
      message: `User with id ${id} fetched`,
    });
  })
  .put((req, res) => {
    const { id } = req.params;
    res.json({
      message: `User with id ${id} updated`,
    });
  })
  .delete((req, res) => {
    const { id } = req.params;
    res.json({
      message: `User with id ${id} deleted`,
    });
  });

module.exports = userRouter;
