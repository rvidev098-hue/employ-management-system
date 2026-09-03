import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginLAnding";
import Layout from "./pages/Layout";
import Dashboard from "./pages/dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Settings from "./pages/Settings";
import Payslips from "./pages/PaySlips";
import PrintPayslips from "./pages/PrintPayslips";
import LoginForm from "./Components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Explicit Root Redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/admin" element={<LoginForm role="admin" title="adminportal" subtitle="Sing in to manage the organisation"/>} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="employeeportal" subtitle="Sihn In to access your account" />} />


        {/* Protected / App Layout Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Standalone Printable Page (No Sidebar/Header Layout) */}
        <Route path="/print/payslip/:id" element={<PrintPayslips />} />

        {/* Catch-all Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;