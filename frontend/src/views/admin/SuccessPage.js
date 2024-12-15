import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/admin");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">Appointment Booked Successfully!</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Thank you for booking your appointment. You will be redirected shortly.
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
