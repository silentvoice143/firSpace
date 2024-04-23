import React from "react";

import { RiArrowDropDownLine } from "react-icons/ri";
import RevenueCard from "./RevenueCard";

function Revenues() {
  return (
    <div className="revenue-container">
      <div className="revenue-header">
        <h1>Income report</h1>
        <div className="revenue-header-right">
          <div className="dropdown-container">
            <div className="dropdown-content">
              <span>Week</span>{" "}
              <RiArrowDropDownLine className="dropdown-icon" />
              <div className="dropdown-options">
                <ul className="dropdown-list">
                  <li className="dropdown-item">Month</li>
                  <li className="dropdown-item">Week</li>
                  <li className="dropdown-item">Year</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dropdown-container">
            <p>Compared to : Prev </p>
            <div className="dropdown-content">
              <span>Week</span>{" "}
              <RiArrowDropDownLine className="dropdown-icon" />
              <div className="dropdown-options">
                <ul className="dropdown-list">
                  <li className="dropdown-item">Month</li>
                  <li className="dropdown-item">Week</li>
                  <li className="dropdown-item">Year</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="revenue-cards-container">
        <RevenueCard isSpecial={true} />
        <RevenueCard />
        <RevenueCard />
      </div>
    </div>
  );
}

export default Revenues;
