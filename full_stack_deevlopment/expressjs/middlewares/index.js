const express = require("express");
const app = express();
const PORT = 8082;

// Serve static files from the public directory
app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
const userRouter = require("./userRouter");

const isAuthenticated = require("./middlewares/isAuthenticated");
const postRouter = require("./postRouter");

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.use("/users", isAuthenticated, userRouter);
app.use("/posts", isAuthenticated, postRouter);

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
