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
    // 1. Database name is studentDatabase
    // 2. Collections are students and teachers
    // 3. Documents are the data in the collection
    const database = client.db("abdulDatabase");

    const students = database.collection("students");

    // 3. Perform the CRUD operations using the insertOne method
    // const result = await students.insertOne({
    //   name: "Abdulhamid",
    //   age: 21,
    //   course: "Computer Science",
    // });

    // const results = await students.insertMany([
    //   {
    //     name: "Abdulhamid",
    //     age: 21,
    //     course: "Computer Science",
    //   },
    //   {
    //     name: "Abdulhamid",
    //     age: 21,
    //     course: "Computer Science",
    //   },
    //   {
    //     name: "Abdulhamid",
    //     age: 21,
    //     course: "Computer Science",
    //   },
    // ]);

    // const resultCursor = students.find();
    // const results = await resultCursor.toArray();
    // console.log(results);

    // const result = await students.findOne({
    //   age: 21,
    // });

    // console.log(result);

    // Upate operations using the updateOne method
    // const result = await students.updateOne(
    //   {
    //     name: "Abdulhamid",
    //   },
    //   {
    //     $set: {
    //       age: 22,
    //     },
    //   }
    // );

    // await students.updateMany(
    //   {
    //     name: "Abdulhamid",
    //   },
    //   {
    //     $set: {
    //       age: 22,
    //       course: "Mathematics",
    //     },
    //   }
    // );

    // const results = await students.findOneAndUpdate(
    //   {
    //     name: "Abdulhamid",
    //   },
    //   {
    //     $set: {
    //       age: 22,
    //     },
    //   }
    // );

    // console.log(results);

    const result = await students.deleteOne({
      name: "Abdulhamid",
    });

    await students.deleteMany({
      name: "Abdulhamid",
    });
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
