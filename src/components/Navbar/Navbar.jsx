import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoGridOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { PiChatsCircleBold } from "react-icons/pi";
import { TbHelpSquareRounded } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import "./navbar.css";

function Navbar() {
  return (
    <>
      <ul className="nav-list">
        <li className="nav-items">
          <NavLink to="/" className="nav-link">
            <MdOutlineMonitorHeart className="nav-icons" />
            <p className="nav-text">Dashboard</p>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/clients" className="nav-link">
            <BsPerson className="nav-icons" />
            <p className="nav-text">Clients</p>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/groups" className="nav-link">
            <HiOutlineUserGroup className="nav-icons" />
            <p className="nav-text">Groups</p>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/templates" className="nav-link">
            <IoGridOutline className="nav-icons" />
            <p className="nav-text">Templates</p>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/calendar" className="nav-link">
            <CiCalendarDate className="nav-icons" />
            <p className="nav-text">Calendar</p>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/chats" className="nav-link">
            <PiChatsCircleBold className="nav-icons" />
            <p className="nav-text">Chats</p>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to="/help" className="nav-link">
            <TbHelpSquareRounded className="nav-icons" />
            <p className="nav-text">Help</p>
          </NavLink>
        </li>

        <li className="nav-items">
          <NavLink to="/settings" className="setting-btn nav-location nav-link">
            <IoSettingsOutline className="nav-icons setting-icon" />
            <p className="nav-text">Settings</p>
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
