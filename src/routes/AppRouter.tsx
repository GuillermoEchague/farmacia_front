import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import SalesPOS from "../pages/SalesPOS";
import Reports from "../pages/Reports";
import ReportPreview from "../pages/ReportPreview";
import { useAuth } from "../context/AuthContext";
import React from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuth();
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={<Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/inventory"
        element={
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        }
      />
      <Route
        path="/sales"
        element={
          <PrivateRoute>
            <SalesPOS />
          </PrivateRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        }
      />
      <Route
        path="/report-preview"
        element={
          <PrivateRoute>
            <ReportPreview />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
