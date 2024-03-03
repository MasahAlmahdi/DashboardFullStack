const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require('./Routes/AuthRoutes.js')
const cookieParser = require('cookie-parser');
const app = express();

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started at 3000.");
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/jwt")
    .then(() => {
        console.log("DB connection success");
    })
    .catch((err) => {
        console.error("DB connection error:", err.message);
    });


app.use(
    cors({
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);


app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);