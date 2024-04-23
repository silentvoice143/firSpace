import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ActivityCard from "./ActivityCard";

function UserActivity() {
  return (
    <div className="clients-activity">
      <div className="clients-activity-header">
        <h3 className="clients-activity-heading">Clients Activity</h3>
        <div className="activity-dropdown dropdown-container">
          <div className="dropdown-content">
            <span>All</span> <RiArrowDropDownLine className="dropdown-icon" />
            <div className="dropdown-options">
              <ul className="dropdown-list">
                <li className="dropdown-item">All</li>
                <li className="dropdown-item">Recent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="activity-list">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      <button className="activity-btn dashbtn-typ1">View All</button>
    </div>
  );
}

export default UserActivity;
