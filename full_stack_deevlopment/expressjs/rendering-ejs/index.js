const express = require("express");
const path = require("path");
const app = express();

const PORT = 8082;

app.use(express.static(path.join(__dirname, "public")));

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
app.get("/user", (req, res) => {
  const userData = {
    name: "John Doe",
    age: 25,
    isPremiumUser: true,
    email: "johndoe@gmail.com",
    isLogin: false,
  };
  res.render("userData.ejs", userData);
});

// render product to page/route
app.get("/product", (req, res) => {
  const products = {
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
      },
      {
        id: 4,
        name: "Product 4",
        price: 400,
      },
      {
        id: 5,
        name: "Product 5",
        price: 500,
      },
    ],
  };
  res.render("products.ejs", products);
});
// Start the server

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
