import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import DataTables from "views/admin/tables";
import Profile from "views/admin/profile";
import BookAppointment from "views/admin/BookAppointment"; // New import
import SignOut from "views/admin/SignOut"; // Sign-out component (new)
import Emergency from "views/admin/Emergency";

// Icon Imports
import {
  MdHome,
  MdGroups,
  MdMedicalServices,
  MdEventAvailable,
  MdExitToApp, // Icon for sign-out
  MdEmergency
} from "react-icons/md";
import { layout } from "@chakra-ui/system";


const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Staff",
    layout: "/admin",
    icon: <MdGroups className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Medicaments",
    layout: "/admin",
    path: "profile",
    icon: <MdMedicalServices className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Book Appointment",
    layout: "/admin",
    path: "book-appointment", // Unique path
    icon: <MdEventAvailable className="h-6 w-6" />, // New icon
    component: <BookAppointment />, // New component
  },
  {
    name: "Emergency",
    layout: "/admin",
    path: "emergency", 
    icon: <MdEmergency className="h-6 w-6" />, 
    component: <Emergency />, 
  },

  {
    name: "Sign Out",
    layout: "/admin",
    path: "sign-out", // Path for sign-out
    icon: <MdExitToApp className="h-80 w-6" />, // Sign-out icon
    component: <SignOut />, // Correct usage of SignOut component
  },  
  
  
];

export default routes;
