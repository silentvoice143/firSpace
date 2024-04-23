import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ Component }) {
  const isLogin = useSelector((state) => state.authReducer.isLogin);

  return isLogin ? <Component /> : <Navigate to="/login" replace="true" />;
}

export default ProtectedRoute;
