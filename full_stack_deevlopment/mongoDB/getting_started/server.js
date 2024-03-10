const express = require("express");

// create the app object using express module
const app = express();

const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;

// connect to mongodb server using MongoClient

// 1. Create the Client object using MongoClient
const client = new MongoClient("mongodb://localhost:27017", {
  serverApi: {
    version: "ServerApiVersion.v1",
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect
async function connect() {
  try {
    // 2. Connect to the server using the client object
    await client.connect();
    console.log("Connected to the server");
  } catch (error) {
    console.error("Error connecting to the server", error);
  }
}

// Call the connect function
connect();

// 2. Connect to the server using the client object
// start the server on port 5000

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
// Path: full_stack_deevlopment/mongoDB/getting_started/server.js
