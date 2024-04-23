import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";
import { LoginUser } from "../../actions";
import { useSelector } from "react-redux";

import "./login.css";

function Login() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  // console.log(isLogin);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      localStorage.setItem("token", "dummytokenforauthentication");
      console.log("login");
      dispatch(LoginUser());
      navigate("/");
    } else {
      console.log("username and password not correct");
    }
  };
  return isLogin ? (
    <Navigate to="/" replace />
  ) : (
    <>
      <div className="login-wrapper gradient-background">
        <div className="login-container">
          <h1 className="login-heading">Login</h1>
          <div className="container-padding">
            <div className="login-input-wrapper">
              <div className="username login-input-box">
                <label htmlFor="username">Username</label>
                <input
                  value={username}
                  type="text"
                  name=""
                  id="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="password login-input-box">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  type="password"
                  name=""
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="login-btn" onClick={handleLogin}>
                Login
              </button>
              <p>
                For demo:
                <br />
                username:user
                <br />
                password:password
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
