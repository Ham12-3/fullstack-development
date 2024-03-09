const express = require("express");
const path = require("path");
const app = express();
const ejsLayout = require("express-ejs-layouts");

const PORT = 8082;

app.use(express.static(path.join(__dirname, "public")));

// Plugin the ejs layout as middleware
app.use(ejsLayout);
app.set("layout", "layout/main-layout.ejs");
app.set("views engine", "ejs");
// Render Home page/route

app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Render About page/route

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

// Render Contact page/route

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Render gallery page/route

app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});

// render userdata  to page/route

// Start the server

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
