import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthGuard = ({ children }) => {
    let token = localStorage.getItem("access-token");
    return (!token) ? <Navigate to={"/login"} replace /> : (children ? children : <Outlet />);
}

export default AuthGuard;