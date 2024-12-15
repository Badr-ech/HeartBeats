import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createAppointment = async (req, res) => {
  const { date, time, reason } = req.body;

  if (!date || !time || !reason) {
    return res.status(400).json({ error: "Date, time, and reason are required." });
  }

  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) {
    return res.status(400).json({ error: "Invalid date format. Use 'YYYY-MM-DD'." });
  }

  try {
    const newAppointment = await prisma.appointments.create({
      data: {
        date: parsedDate,
        time,
        reason,
      },
    });
    res.status(201).json({ message: "Appointment created successfully", appointment: newAppointment });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getAppointments = async (req, res) => {
  try {
    const appointments = await prisma.appointments.findMany({
      orderBy: { date: "asc" },
    });
    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAppointmentsByDate = async (req, res) => {
  const { date } = req.params;

  try {
    const appointments = await prisma.appointments.findMany({
      where: { date: new Date(date) },
      orderBy: { time: "asc" },
    });
    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments by date:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
