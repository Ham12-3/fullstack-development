// Import the required modules

const http = require("http");
const path = require("path");

const url = require("url");

// Home page /
// About page /about

// Define the handler

const requestHandler = (request, response) => {
  const passedUrl = url.parse(request.url, true);
  const pathname = passedUrl.pathname;

  const pathComponent = pathname.split("/").filter(Boolean);
  if (pathComponent[0] === "product" && pathComponent[1]) {
    const productId = pathComponent[1];
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(`Product ID: ${productId}`);
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Page not found");
  }
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
