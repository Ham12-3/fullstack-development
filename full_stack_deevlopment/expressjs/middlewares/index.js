const express = require("express");
const app = express();
const PORT = 8082;
const userRouter = require("./userRouter");

const isAuthenticated = require("./middlewares/isAuthenticated");
const postRouter = require("./postRouter");

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.use("/users", isAuthenticated, userRouter);
app.use("/posts", postRouter);

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
