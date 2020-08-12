const Ivdrip = require("../../models/ivdripModel");
const Therapie = require("../../models/therapieModel");
const Service = require("../../models/serviceModel");
const Team = require("../../models/teamModel");
const Email = require("../../models/emailModel");
const factoryResolver = require("./factoryResolver");
const { mailer } = require("../../utils/mailer");
const Appointment = require("../../models/appointmentModel");

const getIvdrips = () => {
    return factoryResolver.getAll(Ivdrip);
};
const getTherapies = () => {
    return factoryResolver.getAll(Therapie);
};
const getServices = () => {
    return factoryResolver.getAll(Service);
};
const getTeams = () => {
    return factoryResolver.getAll(Team);
};

const sendEmail = async({ input }) => {
    try {
        const data = await Email.create(input);
        await mailer(data);
        return data;
    } catch (error) {
        throw error;
    }
};

//  Appointment
const getAppointments = () => {
    return factoryResolver.getAll(Appointment);
};
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