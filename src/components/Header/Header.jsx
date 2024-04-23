import React, { useEffect, useState } from "react";

import { IoNotificationsOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import "./header.css";
import pic from "../../images/pic.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    let timeoutId;

    const handleSearch = () => {
      console.log("searching for " + searchQuery);
    };

    const delayedSearch = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleSearch, 5000);
    };

    if (searchQuery) {
      delayedSearch();
    }

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <div className="header-container">
      <div className="searchbox-container">
        <IoSearch className="search-icon" />
        <input
          className="searchbox"
          type="text"
          name=""
          id=""
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="header-right">
        <IoNotificationsOutline className="header-icons" />
        <IoMailOutline className="header-icons" />
        <p className="user_name">Sara</p>
        <img className="profile-pic" src={pic} alt="" />
      </div>
    </div>
  );
}

export default Header;
