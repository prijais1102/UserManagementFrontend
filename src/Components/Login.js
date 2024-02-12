import React from "react";
import "./Login.css";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import { useNavigate } from "react-router-dom";
import Link from 'react';

const Login = () => {
    const navigate=useNavigate();
    const onButtonClick = () => {
   
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    fetch("http://localhost:65061/api/Login/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(async (response) => {
        var result = await response.json();
        localStorage.setItem("token", result.token);
        const token = localStorage.getItem("token");
        console.log(token);
        if (token !== "undefined")
        {
            navigate("/users");
        }
        else{
            const displaymessage="Invalid username/password. Kindly register yourself.";
            alert(displaymessage);
            navigate("/login/register");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
    <Header1/>
    <div className="form w-75">
      <div id="mainContainer">
        <div className="heading">
          {" "}
          <h1>Login</h1>
        </div>
        <div className="blur-container">
          <div className="heading1">
            {" "}
            <input type="text" id="email" placeholder="Enter Email" />
          </div>
          <div className="heading1">
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"}
          />
        </div>
      </div>
    </div>
    <div>Don't have an account? Register here. 
    {/* <Link to="/login/register">Register</Link> */}
    </div>
    <Footer1/>
    </div>
  );
};
export default Login;
