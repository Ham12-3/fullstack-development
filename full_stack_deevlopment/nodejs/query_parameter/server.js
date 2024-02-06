// Import the required modules

const http = require("http");
const path = require("path");

const url = require("url");

// Home page /
// About page /about

// Define the handler

const requestHandler = (request, response) => {
  const passedUrl = url.parse(request.url, true);

  const queryparam = passedUrl.query;

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(`Query: ${JSON.stringify(queryparam)}`);
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
