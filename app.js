const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => console.log("Successfully connected to MongoDB Atlas")).catch(error => {
    console.log("Unable to connect to MongoDB Atlas");
    console.log(error);
});

app.use("/users", require("./route/userRoute"));

app.use((req, res) => {
    res.status(200).json({
        message: "Welcome. Glad to have you here!!!"
    })
});

module.exports = app;
