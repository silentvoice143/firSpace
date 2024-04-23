import React from "react";
import "./Dashboard.css";

import Header from "../Header/Header";

import { RiArrowDropDownLine } from "react-icons/ri";
import RevenueCard from "./RevenueCard";
import Revenues from "./Revenues";
import UserActivity from "./UserActivity";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <Revenues />
        <div className="schedule-container">calendar</div>
      </div>
      <div className="dashboard-right">
        <div className="activity-container">
          {" "}
          <UserActivity />
        </div>
        <div className="task-progress-container">
          <h3 className="task-head">Task Completion</h3>
          <div className="task-contents">
            <div className="progressbar-container">progress</div>
            <div className="indicators">
              <span
                className="indicator-color"
                style={{ background: "#59d7ff" }}
              ></span>
              <span className="indicator-text">Complete</span>
              <span
                className="indicator-color"
                style={{ background: "#676767" }}
              ></span>
              <span className="indicator-text">Missed</span>
            </div>
            <button className="dashbtn-typ1 breakdown-btn">
              Show Breakdown
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
