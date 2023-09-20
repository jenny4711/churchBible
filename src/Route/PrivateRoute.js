import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ permissionLevel }) => {
  const user = useSelector((state) => state.user.user);
  console.log(user,'private')
  const isAuthenticated =
    user?.level === permissionLevel || user?.level === 'admin';

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;