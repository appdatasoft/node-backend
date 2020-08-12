var { buildSchema } = require("graphql");

module.exports = buildSchema(`

  scalar Date

  type Menu {
    _id: ID!
    title: String!
    slug: String!
    description:  String!
  }

  type Email {
    _id:ID!
    userId: String!
    email: String!
    subject: String!
    message:  String!
  }

  input EmailInput {
    userId: String!
    email: String!
    subject: String!
    message:  String!
  }

  type Appointment {
    _id:ID!
    title: String!
    message: String!
    start: Date!
    end: Date!
  }

  input AppointmentInput {
    title: String!
    message: String!
    start:  Date!
    end: Date!
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
    updateAppointment(id:ID!, title:String, message:String, start:Date, end:Date): Appointment
    deleteAppointment(id:ID!): String
  }

  schema {
   query: Query
   mutation: Mutation
 }

`);
