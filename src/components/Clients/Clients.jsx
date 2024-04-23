import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";

import {
  fetchAllUsersRequest,
  fetchAllUsersFailure,
  fetchAllUsersSuccess,
} from "../../actions";
import "./clients.css";

import ClientCard from "./ClientCard";

function Clients() {
  let userObj = {
    name: "",
    age: "",
    address: "",
    imgUrl: "",
  };

  const [user, setUser] = useState(userObj);

  const [addUsertoggle, setAddUsertoggle] = useState(false);

  const dispatch = useDispatch();
  const url = "https://randomuser.me/api/?results=5";
  const Clients = useSelector((state) => state.usersReducer.users);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        dispatch(fetchAllUsersRequest);
        const response = await axios.get(url);

        if (response.error) {
          console.log("error");
          dispatch(fetchAllUsersFailure(response.error));
        }

        // console.log(response.data.results);
        dispatch(fetchAllUsersSuccess(response.data.results));
      } catch (error) {
        console.error("Error fetching users:", error);
        dispatch(fetchAllUsersFailure(error));
      }
    };

    fetchClients();
  }, []);

  const token = localStorage.getItem("token");

  async function addUser() {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Add token as a Bearer token in the Authorization header
          "Content-Type": "application/json", // Set the content type to JSON
        },
      };

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        user,
        config
      );
      setUser({ name: "", address: "", age: "", imgUrl: "" });
      alert("User added:", response.data);
      console.log("User added:", response.data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  const handleClose = () => {
    setAddUsertoggle(false);
  };

  return (
    <div className="client-container">
      {addUsertoggle && (
        <div className="add-user-wrapper">
          <div className="input-box-container">
            <div className="add-user-header">
              <h3 className="text-heading">Fill Details</h3>
              <IoMdClose className="close-icon" onClick={handleClose} />
            </div>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => {
                setUser({ ...user, imgUrl: e.target.files[0].name });
              }}
            />
            <div className="input-feild">
              <label htmlFor="clientname">Name</label>
              <input
                type="text"
                name=""
                id="clientname"
                value={user.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
            </div>
            <div className="input-feild">
              <label htmlFor="clientage">Age</label>
              <input
                type="number"
                name=""
                id="clientage"
                value={user.age}
                onChange={(e) => {
                  setUser({ ...user, age: e.target.value });
                }}
              />
            </div>
            <div className="input-feild">
              <label htmlFor="clientaddress">Address</label>
              <input
                type="text"
                name=""
                id="clientaddress"
                value={user.address}
                onChange={(e) => {
                  setUser({ ...user, address: e.target.value });
                }}
              />
            </div>
            <button
              onClick={() => {
                addUser();
                handleClose();
              }}
              className="dashbtn-typ1 btn-margin-top"
            >
              Save
            </button>
          </div>
        </div>
      )}
      <div className="client-header">
        <h1 className="client-heading">Clients</h1>
        <button
          className="client-add-btn"
          onClick={() => {
            setAddUsertoggle(true);
          }}
        >
          Add Client
        </button>
      </div>
      <div className="client-list">
        {Clients.map((item, idx) => {
          return (
            <ClientCard
              key={idx}
              img={item.picture.large}
              name={item.name.first + " " + item.name.last}
              age={item.dob.age}
              add={item.location.city + " , " + item.location.state}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Clients;
