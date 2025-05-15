import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "./App";

import Navbar from "./Navbar";
import "./Target_id.css";
import Flex from "react-calendar/src/Flex.js";
import axios from "axios";

export default function Target_id() {
  const { globalState, dispatch } = useContext(AuthContext);
  const location = useLocation();
  const target = location.state;

  const [uploadStatus, setUploadStatus] = useState({
    email: globalState.email,
    name: target.customName,
    date: " ",
    status: " ",
    id:target.id
  });

  async function uploadStatusHandler(e) {
    e.preventDefault();
    console.log("upload data", uploadStatus);
  
    const res = await axios.post(
      "http://localhost:5000/uploadstatus",
      uploadStatus
    );
    console.log("show status of target", res);
  }

  // {
  //     "id": 5,
  //     "email": "yogeshpriyadarshi55@gmail.com",
  //     "type": "Custom",
  //     "year": 2025,
  //     "month": "may",
  //     "firstDate": "2025-05-05T18:30:00.000Z",
  //     "lastDate": "2025-05-14T18:30:00.000Z",
  //     "target": "I will read daily 50 pages of \"GET EPIC SHIT DONE \"   I will try to complete this in 7 days, rest days I will write summary of book.",
  //     "customName": " Book: \"GET EPIC SHIT DOEN\""
  // }

  return (
    <>
      <Navbar />
      <div id="targetida">
        <h1> {target.customName} </h1>
      </div>
      <div id="targetidb">
        <div id="targetidc">
          <div className="targetclassa"> {target.target} </div>
          <div className="targetclassa" > {target.firstDate} </div>
          <div className="targetclassa" > {target.lastDate} </div>
        </div>
        <div>
          upload the status
          <div style={{ backgroundColor: "blue", color: "white" }}>
            <h3> Upload your PROGRESS</h3>
          </div>
          <form onSubmit={(e) => uploadStatusHandler(e)}>
            <label> date: </label>
            <input type="date" onChange={(e)=> setUploadStatus({...uploadStatus, date:e.target.value})} />
            <br />
            <label> status: </label>
            <textarea id="textida" onChange={(e)=> setUploadStatus({...uploadStatus, status:e.target.value})} >  </textarea>
<br/>
            <button type="submit" style={{ height: "25px", width: "300px" }}>
              {" "}
              update status{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function DestinationComponent() {}
