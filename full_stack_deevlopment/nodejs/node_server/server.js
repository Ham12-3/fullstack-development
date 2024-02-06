// Import the required modules

const http = require("http");

const url = require("url");

// Home page /
// About page /about

// Define the handler

const requestHandler = (request, response) => {
  const passedUrl = url.parse(request.url, true);

  if (passedUrl.pathname === "/" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello Node.js Server!");
  } else if (passedUrl.pathname === "/about" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("About Node.js Server!");
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
