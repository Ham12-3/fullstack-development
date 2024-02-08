const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.json({
    message: "Allu sers fethched",
  });
});

userRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `User with id ${id} fetched`,
  });
});

// Update user

userRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `User with id ${id} updated`,
  });
});

// Delete user

userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: `User with id ${id} deleted`,
  });
});

module.exports = userRouter;
