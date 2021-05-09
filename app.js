const express = require("express");
const app = express();
const dbSetup = require("./database/setup");
const allUserRoute = require("./route/userRoute");

dbSetup();
app.use(express.json());


app.use("/user", allUserRoute);

app.use((req, res) => {
    res.status(200).json({
        message: "Welcome. Glad to have you here!!!"
    })
});

module.exports = app;
