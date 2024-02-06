// Import the required modules

const http = require("http");
const path = require("path");

const url = require("url");

// Home page /
// About page /about

// Define the handler

const requestHandler = (request, response) => {
  const data = {
    name: "John Doe",
    age: 25,
    email: "JOHNDOE@user.com",
  };
  // Set the response  header to JSON format and send the data

  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
};

// Create the server

const server = http.createServer(requestHandler);
// Start the server

const PORT = 3000;

server.listen(PORT, (err) => {
  if (err) {
    return console.log("Error: ", err);
  }
  console.log(`Server is listening on ${PORT}`);
});
