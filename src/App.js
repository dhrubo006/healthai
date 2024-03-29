import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignupPage from "./components/loginSignupPage";
import WelcomePage from "./components/WelcomePage";
import AdminAuthPage from './components/AdminAuthPage'
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignupPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/admin-auth" element={<AdminAuthPage />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
