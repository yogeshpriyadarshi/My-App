import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <div id="profile_idb">
       <Link id="profile_ida"  to="/home">
                  DO IT
                </Link> 
        Profile
        <button id="profile_ide" onClick={logout}>
          {" "}
          logout{" "}
        </button>
      </div>
      <div id="profile_idc">
        <form>
          <label>Name:</label>
          <br />
          <input className="profile_classa" type="text" placeholder="Name" />
          <br />
          <label>Email:</label>
          <br />
          <input className="profile_classa" type="text" placeholder="Email" />
          <br />
          <label>Password :</label>
          <br />
          <input
            className="profile_classa"
            type="text"
            placeholder="Password"
          />
          <br />
          <label>Contact:</label>
          <br />
          <input className="profile_classa" type="text" placeholder="Name" />
          <br />
          <label>Date of Birth:</label>
          <br />
          <input className="profile_classa" type="date" placeholder="Email" />
          <br />
          <label> Gender: </label> <br />
          <select className="profile_classa">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
          <br />
          <label>Country :</label>
          <br />
          <input className="profile_classa" type="text" placeholder="Country" />
          <br />
          <label>City :</label>
          <br />
          <input className="profile_classa" type="text" placeholder="City" />
          <br />
          <button id="profile_idd"> Save Change </button>
          <br />
        </form>
      </div>
    </>
  );
}
