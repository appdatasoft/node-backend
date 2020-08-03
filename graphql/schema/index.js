var { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type Menu {
    _id: ID!
    title: String!
    slug: String!
    description:  String!
  }

  type Email {
    _id:ID!
    email: String!
    subject: String!
    message:  String!
  }

  input EmailInput {
    email: String!
    subject: String!
    message:  String!
  }
  
  type Mutation {
    sendEmail(input:EmailInput): Email
  }
  
  type Query {
    getIvdrips:[Menu!]
    getTherapies:[Menu!]
    getServices:[Menu!]
    getTeams:[Menu!]
  }

  schema {
   query: Query
   mutation: Mutation
 }

`);