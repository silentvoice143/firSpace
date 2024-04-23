import React from "react";

function RevenueCard({ isSpecial }) {
  return (
    <div
      className="revenue-card"
      style={{
        background: isSpecial ? "#f3ff47" : "#1f1f1f",
        color: isSpecial ? "black" : "white",
        scale: isSpecial ? "1.01" : "1",
      }}
    >
      <div className="revenue-top">
        <h2 className="revenue-heading">Revenue</h2>
        <div
          className="profit-rate"
          style={{
            background: isSpecial ? "black" : "white",
            color: isSpecial ? "white" : "black",
          }}
        >
          +17%
        </div>
      </div>
      <div className="revenue-middle">$ 827,00</div>
      <div className="revenue-bottom">
        <span className="price">$ 355,00</span>
        <span> + $ 360,00</span>
      </div>
    </div>
  );
}

export default RevenueCard;
