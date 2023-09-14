import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://192.168.1.8:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken, setUser }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [token, user] = await loginUser({
      username,
      password,
    });
    if (user && token) {
      setToken(token);
      setUser(user);
    } else {
      //handle wrong user & password
    }
  };
  return (
  localStorage.getItem("user")? 
  <Navigate to="/" replace={true} /> 
  :    
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit" autoFocus>Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
