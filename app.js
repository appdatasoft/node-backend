var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const Appointment = require("./models/appointmentModel");

var app = express();

// Global Middlewares

// Implement CORS
app.use(cors());

app.use(bodyParser.json());

app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true,
    })
);

app.use("/", (req, res) => {
    res.send("Beverly Hills Backend try /graphql");
});

module.exports = app;