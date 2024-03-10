const express = require("express");

// create the app object using express module
const app = express();

const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;

// dotenv confguration to use environment variables
require("dotenv").config();
// connect to mongodb server using MongoClient

// mongodb+srv://abdulhamid:omolara@cluster0.y0p7r3e.mongodb.net/studentDatabase

// 1. Create the Client object using MongoClient
const client = new MongoClient(process.env.MONGODB_DATABASE_NAME, {
  serverApi: {
    version: ServerApiVersion.v1,
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
