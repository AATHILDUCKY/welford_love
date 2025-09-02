// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, ready } = useAuth();

  if (!ready) {
    return <div className="p-8 text-center text-muted-foreground">Checking your session…</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
