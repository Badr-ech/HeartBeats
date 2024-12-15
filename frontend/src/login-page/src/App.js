import React from "react";
import Form from "./components/Form"; // Ensure correct import

const LoginPage = ({ onLogin }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center">
        <Form onLogin={onLogin} /> {/* Pass onLogin to Form */}
      </div>
    </div>
  );
};

export default LoginPage;

