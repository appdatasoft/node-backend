const mongoose = require("mongoose");
const serverless = require("serverless-http");

const app = require("./app");

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    })
    .then((con) => console.log("DB Connection Successfull!"))
    .catch((err) => console.log("DB Connection Failed"));

module.exports.handler = serverless(app);