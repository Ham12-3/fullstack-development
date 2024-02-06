// Import the required modules

const http = require("http");

const employees = [
  { id: 1, name: "Emmanuel", department: "IT" },
  { id: 2, name: "John", department: "HR" },
  { id: 3, name: "Sarah", department: "Finance" },
  { id: 4, name: "Lizzy", department: "Admin" },
  { id: 5, name: "Paul", department: "IT" },
];

// Home page /
// About page /about

// Define the handler

const requestHandler = (request, response) => {
  const { method, url } = request;
  const parts = url.split("/");

  const id = parts[2];

  if (method === "GET" && url === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(employees));
  } else if (method === "GET" && url === "/about") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("About page");
  } else if (method === "GET" && url === "/employee") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(employees));
  } else if (method === "GET" && url === `/employee/${id}`) {
    const employee = employees.find((employee) => employee.id === parseInt(id));
    if (employee) {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(employee));
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("Employee not found");
    }
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
