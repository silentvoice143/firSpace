import React from "react";
import pic from "../../images/pic.png";

function ActivityCard() {
  return (
    <div className="activity-card">
      <div className="activity-card-right">
        <img className="profile-pic" src={pic} alt="" />
        <div className="activity-mid">
          <div className="user-name">xyz</div>
          <p className="activity-content">Added 2 photos in food dairy.</p>
        </div>
      </div>
      <div className="activity-time">1 hr</div>
    </div>
  );
}

export default ActivityCard;
