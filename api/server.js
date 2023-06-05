// express to handle our API
const express = require("express");
// mongoos to handle our database
const mongoose = require("mongoose");
// cors to handle cross origin resource sharing
const cors = require("cors");

// create express app by calling express as a function
const app = express();

app.use(express.json());
app.use(cors());
// you pick a database name (after the slash below) with your mongo connection
mongoose
  .connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch(console.error);
// listen on port 3001 with a callback function that tells us it's running
app.listen(3001, () => console.log("The server is running on port 3001"));
