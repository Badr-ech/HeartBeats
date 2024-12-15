import express from "express";
import { createAppointment, getAppointments, getAppointmentsByDate } from "../Controllers/appointmentsController.js";

const appointmentsRouter = express.Router();

appointmentsRouter.post("/", createAppointment);               // Create an appointment
appointmentsRouter.get("/", getAppointments);                 // Get all appointments
appointmentsRouter.get("/date/:date", getAppointmentsByDate); // Get appointments by date

export default appointmentsRouter; // Named export