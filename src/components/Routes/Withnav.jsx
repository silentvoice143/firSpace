import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./withnav.css";
import Header from "../Header/Header";
import { LogoutUser } from "../../actions";

function Withnav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(LogoutUser());
    navigate("/login");
  };
  return (
    <>
      <div className="main-container">
        <div className="sidebar">
          <h1 className="logo">FIT SPACE</h1>
          <Navbar />
          <button className="logout-btn" onClick={handleLogout}>
            <IoMdLogOut className="logout-icon" />
            <span className="logout-text">Log Out</span>
          </button>
        </div>
        <div className="page-container">
          <Header />
          <div className="view-container">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Withnav;
