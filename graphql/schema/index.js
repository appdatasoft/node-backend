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

  type Appointment {
    _id:ID!
    title: String!
    message: String!
    start: String!
    end: String!
  }

  input AppointmentInput {
    title: String!
    message: String!
    start:  String!
    end: String!
  }
  
  type Query {
    getIvdrips:[Menu!]
    getTherapies:[Menu!]
    getServices:[Menu!]
    getTeams:[Menu!]
    getAppointments:[Appointment!]
  }

  type Mutation {
    sendEmail(input:EmailInput): Email
    createAppointment(input:AppointmentInput): Appointment
    updateAppointment(id:ID!, title:String, message:String, start:String): Appointment
    deleteAppointment(id:ID!): String
  }

  schema {
   query: Query
   mutation: Mutation
 }

`);