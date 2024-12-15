import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import LoginPage from "login-page/src/App";
import SignOut from "views/admin/SignOut";
import BookAppointment from "views/admin/BookAppointment";
import SuccessPage from "views/admin/SuccessPage";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

    return (
        <Routes>
            {/* Login Page Route */}
            <Route
                path="/login"
                element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
            />

            {/* Main Admin Layout */}
            <Route
                path="admin/*"
                element={isLoggedIn ? <AdminLayout /> : <Navigate to="/login" />}
            />
            <Route path="/success" element={<SuccessPage />} />

            {/* SignOut Route */}
            <Route path="signout" element={<SignOut />} />

            {/* Default Redirection to Admin */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default App;

