const express = require("express");
const path = require("path");
const app = express();

const PORT = 8082;

app.use(express.static(path.join(__dirname, "public")));

// Render Home page/route

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views", "home.html"));
});

// Render About page/route

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views", "about.html"));
});

// Render Contact page/route

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views", "contact.html"));
});

// Render gallery page/route

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/views", "gallery.html"));
});
// Start the server

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
