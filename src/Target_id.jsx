import React, { useContext, useEffect, useState } from "react";
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
    id: target.id,
  });
  const [status, setStatus] = useState([]);
console.log("first,",status[0]?.id);

  useEffect(() => {
    statusHandle();
  }, []);

  async function uploadStatusHandler(e) {
    e.preventDefault();
    console.log("upload data", uploadStatus);

    const res = await axios.post(
      "http://localhost:5000/uploadstatus",
      uploadStatus
    );
    console.log("show status of target", res);

    setUploadStatus({
      email: globalState.email,
      name: target.customName,
      date: " ",
      status: " ",
      id: target.id,
    });
  }


  async function statusHandle() {
    const status = { id: target.id };
    console.log("status Handle", status);

    const res = await axios.post("http://localhost:5000/statusTarget", status);
    console.log("setStatus upload status", res.data);
    setStatus(res.data);
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
          <div id="targetidd">
            <div className="targetclassa">
              {" "}
              Starting date of Target: {target.firstDate.slice(0, 10)}{" "}
            </div>
            <div className="targetclassa">
              {" "}
              Ending date of Target: {target.lastDate.slice(0, 10)}{" "}
            </div>
          </div>

          <div> {target.target} </div>

          <table>
            <thead>
              <tr>
                <th> Date </th>
                <th> Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {status[0]?.date} </td>
                <td> {status[0]?.status} </td>
              </tr>
            </tbody>
          </table> 

        </div>
        <div id="targetide">
          <div style={{ backgroundColor: "blue", color: "white" }}>
            <h3> Upload your PROGRESS</h3>
          </div>
          <form onSubmit={(e) => uploadStatusHandler(e)}>
            <label> date: </label>
            <input
              type="date"
              onChange={(e) =>
                setUploadStatus({ ...uploadStatus, date: e.target.value })
              }
            />
            <br />
            <label> status: </label>
            <textarea
              id="textida"
              value={uploadStatus.status}
              onChange={(e) =>
                setUploadStatus({ ...uploadStatus, status: e.target.value })
              }
            >
              {" "}
            </textarea>
            <br />
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
