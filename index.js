const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const couponRouter = require("./Routes/userroutes");

mongoose.connect("mongodb://localhost:27017/coupondatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
});
db.once("open", () => {
    console.log("Database is connected");
});

const app = express();
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.use("/", couponRouter);

const Port = 5003;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
