const Ivdrip = require("../../models/ivdripModel");
const Therapie = require("../../models/therapieModel");
const Service = require("../../models/serviceModel");
const Team = require("../../models/teamModel");
const Email = require("../../models/emailModel");
const factoryResolver = require("./factoryResolver");
const { mailer } = require("../../utils/mailer");
const Appointment = require("../../models/appointmentModel");

const getIvdrips = factoryResolver.getAll(Ivdrip);
const getTherapies = factoryResolver.getAll(Therapie);
const getServices = factoryResolver.getAll(Service);
const getTeams = factoryResolver.getAll(Team);

const sendEmail = async({ input }) => {
    try {
        const data = await Email.create(input);
        await mailer(data);
        return data;
    } catch (error) {
        throw error;
    }
};

const getAppointments = factoryResolver.getAll(Appointment);

const createAppointment = ({ input }) => {
    return factoryResolver.create(Appointment, input);
};

const updateAppointment = (input) => {
    return factoryResolver.update(Appointment, input);
};

const deleteAppointment = ({ id }) => {
    return factoryResolver.delete(Appointment, id);
};

module.exports = {
    getIvdrips,
    getTherapies,
    getServices,
    getTeams,
    sendEmail,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointments,
};