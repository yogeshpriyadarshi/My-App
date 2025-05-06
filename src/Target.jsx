import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import "./Target.css";
import { AuthContext } from "./App";
import axios from "axios";
import { parse } from "date-fns";
import moment from "moment";

export default function Target() {
  const { state, dispatch } = useContext(AuthContext);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [target, setTarget] = useState([]);
  const [currentTarget, setCurrentTarget] = useState(" ");
  const [uploadStatus, setUploadStatus] = useState({
    email: state.email,
    name: " ",
    date: " ",
    status: " ",
  });
  const [status, setStatus] = useState([]);
  const [aim, setAim] = useState({
    email: state.email,
    type: " ",
    customName: " ",
    year: new Date().getFullYear(),
    month: monthNames[new Date().getMonth()],
    firstDate: 0,
    lastDate: 0,
    setTarget: " ",
  });

  useEffect(() => {
    seekTarget();
  }, []);

  function typeHandler(e) {
    setAim({ ...aim, type: e.target.value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    let payload = aim;

    if (aim.type === "Yearly") {
      payload.firstDate = `${aim.year}-01-01`;
      payload.lastDate = `${aim.year}-12-31`;
    }
    console.log(
      " first date ",
      payload.firstDate,
      "last date",
      payload.lastDate
    );
    console.log("print aim from fronted to backend", payload);

    const res = await axios.post("http://localhost:5000/setTarget", aim);
  }

  async function statusHandle(e) {
    // const ida = e.target.value;
    // const typea = type.find( type => type.id===ida)
    // console.log("after selection of target name",ida);
    setCurrentTarget(e.target.value);
    setUploadStatus({ ...uploadStatus, name: e.target.value });
    const status = { email: state.email, name: e.target.value };
    console.log("status Handle", status);
    const res = await axios.post("http://localhost:5000/statusTarget", status);
    console.log("setStatus", res.data);
    setStatus(res.data);
  }
  async function uploadStatusHandler(e) {
    e.preventDefault();
    console.log("upload data", uploadStatus);
    const res = await axios.post(
      "http://localhost:5000/uploadstatus",
      uploadStatus
    );
    console.log("show status of target", res);
  }

  async function seekTarget() {
    const customa = { email: state.email };

    const res = await axios.post("http://localhost:5000/seekTarget", customa);
    setTarget(res.data);
    console.log("all Target", res.data);
  }
  return (
    <>
      <Navbar />
      <div id="target_ida">
        <div id="target_idb">
          {" "}
          <h4> How can one add target?</h4>
          <p> Step 1: </p>
        </div>

        <div id="target_idc">
          <h2 style={{ color: "red" }}>Add target</h2>

          <form onSubmit={(e) => submitHandler(e)}>
            <label style={{ margin: "10px", fontSize: "20px" }}>
              Select Type of Target:
            </label>
            <select
              className="target_classa"
              value={aim.type}
              onChange={(e) => {
                typeHandler(e);
              }}
            >
              <option value=""> select type of target</option>
              <option value="Custom"> Custom </option>
              <option value="Weekly"> Weekly </option>
              <option value="Monthly"> Monthly </option>
              <option value="Yearly"> Yearly </option>
            </select>

            {aim.type === "Custom" && (
              <div>
                <label style={{ fontSize: "20px" }}> Target Name </label>
                <input
                  className="target_classa"
                  id="label_ida"
                  type="text"
                  value={aim.customName}
                  onChange={(e) => {
                    setAim({ ...aim, customName: e.target.value });
                  }}
                />
                <br />
                <label style={{ fontSize: "20px" }}> Starting date:</label>
                <input
                  className="target_classa"
                  id="label_ida"
                  type="date"
                  onChange={(e) =>
                    setAim({
                      ...aim,
                      firstDate: moment(e.target.value).format("YYYY-MM-DD"),
                    })
                  }
                />
                <br />

                <label style={{ fontSize: "20px" }}> Ending date:</label>
                <input
                  className="target_classa"
                  style={{ fontSize: "20px" }}
                  id="label_ida"
                  type="date"
                  onChange={(e) => setAim({ ...aim, lastDate: e.target.value })}
                />
                <br />

                <label style={{ fontSize: "20px" }}> Describe Target </label>
                <textarea
                  style={{ fontSize: "20px" }}
                  value={aim.setTarget}
                  onChange={(e) =>
                    setAim({ ...aim, setTarget: e.target.value })
                  }
                >
                  {" "}
                </textarea>

                <br />
              </div>
            )}

            {aim.type === "Yearly" && (
              <>
                <label> select </label>
                <select
                  value={aim.year}
                  onChange={(e) => setAim({ ...aim, year: e.target.value })}
                >
                  <option value=" "> .....choose.....</option>
                  <option value="2025"> 2025 </option>
                  <option value="2026"> 2026 </option>
                  <option value="2027"> 2027 </option>
                  <option value="2028"> 2028 </option>
                  <option value="2029"> 2029 </option>
                  <option value="2030"> 2030 </option>
                </select>
                <label> Write Target: </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setAim({ ...aim, setTarget: e.target.value });
                  }}
                />
              </>
            )}

            {aim.type === "Monthly" && (
              <>
                <div>
                  <label> select months </label>
                  <select
                    value={aim.month}
                    onChange={(e) => setAim({ ...aim, month: e.target.value })}
                  >
                    <option value="January"> January </option>
                    <option value="Febuary"> Feburary </option>
                    <option value="March"> March </option>
                    <option value="April"> April </option>
                    <option value="May"> May </option>
                    <option value="June"> June </option>
                    <option value="July"> July </option>
                    <option value="August"> August </option>
                    <option value="September"> September </option>
                    <option value="October"> October </option>
                    <option value="November"> November </option>
                    <option value="December"> December </option>
                  </select>
                </div>

                <div>
                  <label> select </label>
                  <select
                    value={aim.year}
                    onChange={(e) => setAim({ ...aim, year: e.target.value })}
                  >
                    <option value="2025"> 2025 </option>
                    <option value="2026"> 2026 </option>
                    <option value="2027"> 2027 </option>
                    <option value="2028"> 2028 </option>
                    <option value="2029"> 2029 </option>
                    <option value="2030"> 2030 </option>
                  </select>
                </div>
              </>
            )}
            <br />
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>

      <hr />

      <div>
        show custom target and allow to update status <br />
        <div style={{display:"flex"}}>
          {target.map((tar, index) => (
            <>
              <div className="target_classb">
                <h3>{tar.customName}</h3>
              </div>
            </>
          ))}
        </div>


        </div>
    </>
  ); 

}

{/* next page concept */}

        {/* <div style={{ backgroundColor: "yellow" }}>
          <h3> SHOW HERE TARGET AND IT'S PROGRESS STATUS</h3>
        </div>
        <h4> target name{currentTarget}</h4>
        <table>
          <thead>
            <tr>
              <th> date </th>
              <th> progress </th>
            </tr>
          </thead>
          <tbody>
            {status.map((ta, i) => (
              <>
                <tr key={i}>
                  <td> {ta.date} </td>
                  <td> {ta.status} </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <hr />
        <form onSubmit={(e) => uploadStatusHandler(e)}>
          <label> date: </label>
          <input
            type="date"
            onChange={(e) => {
              setUploadStatus({ ...uploadStatus, date: e.target.value });
            }}
          />
          <br />
          <label> status: </label>
          <input
            type="text"
            onChange={(e) => {
              setUploadStatus({ ...uploadStatus, status: e.target.value });
            }}
          />
          <br /> */}

          {/* {/* <button type="submit" style={{ height: "25px", width: "300px" }}>
            {" "}
            update status{" "}
          </button>
        </form> */}

