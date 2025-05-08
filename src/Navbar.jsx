import React from "react";
import { useLocation } from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
console.log("first,,", location.pathname);
  return (
    <header>
      <div id="navbar">
        <Link to="/">
          {" "}
          <img src="src\assets\react.svg" alt="logo" />{" "}
        </Link>
        <Link className={location.pathname.includes("home") ?"tab_selected": "tab"}  to="/home">
          Home
        </Link>

        <Link className="tab" to="/target">
          Target
        </Link>

        <Link className="tab" to="/to_do_list">
          To Do List
        </Link>
        <Link className="tab" to="/game">
          Game
        </Link>
        <Link className="tab" to="/journal">
          Journal
        </Link>
        <Link className="tab" to="/calculator">
          Calculator
        </Link>
        <Link className="tab" to="/profile">
        <FaUserCheck size={40} color="white" />
        </Link>
       

        {/* <Link className="tab" to="/login"><button className="id_button" > login </button></Link> */}
        {/* <Link className="tab" to="/createAccount"><button className="id_button">create account</button></Link> */}
      </div>
    </header>
  );
}
