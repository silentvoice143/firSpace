import React from "react";

import pic from "../../images/pic.png";

function ClientCard({ name, age, add, img }) {
  return (
    <div className="client-card">
      <img className="client-pic" src={img} alt="" />
      <div className="client-details">
        <div className="client-name">{name}</div>
        <div className="client-age">Age: {age}</div>
        <div className="client-address">Address: {add}</div>
      </div>
    </div>
  );
}

export default ClientCard;
