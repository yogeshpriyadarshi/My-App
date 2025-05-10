import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import "./Target.css";
import { AuthContext } from "./App";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { parse } from "date-fns";
import moment from "moment";

export default function Target() {
  const { globalState, dispatch } = useContext(AuthContext);
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
    email: globalState.email,
    name: " ",
    date: " ",
    status: " ",
  });
  const navigate = useNavigate();


  const [status, setStatus] = useState([]);
  const [aim, setAim] = useState({
    email: globalState.email,
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
  }, [aim]);

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
  
   console.log("print aim from fronted to backend", payload);

    const res = await axios.post("http://localhost:5000/setTarget", aim);
console.log("from backend uploaded target", res)

setAim( {
  email: globalState.email,
  type: " ",
  customName: " ",
  year: new Date().getFullYear(),
  month: monthNames[new Date().getMonth()],
  firstDate: 0,
  lastDate: 0,
  setTarget: " ",
}  );


  }

  async function statusHandle(e) {
    // const ida = e.target.value;
    // const typea = type.find( type => type.id===ida)
    // console.log("after selection of target name",ida);
    setCurrentTarget(e.target.value);
    setUploadStatus({ ...uploadStatus, name: e.target.value });
    const status = { email: globalState.email, name: e.target.value };
    console.log("status Handle", status);
    const res = await axios.post("http://localhost:5000/statusTarget", status);
    console.log("setStatus", res.data);
    setStatus(res.data);
  }


  async function seekTarget() {
    const customa = { email: globalState.email };

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
                <label htmlFor="label_ida" style={{ fontSize: "20px" }}> Target Name </label>
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
                <label htmlFor="label_idb"  style={{ fontSize: "20px" }}> Starting date:</label>
                <input
                  className="target_classa"
                  id="label_idb"
                  type="date"
                  onChange={(e) =>
                    setAim({
                      ...aim,
                      firstDate: moment(e.target.value).format("YYYY-MM-DD"),
                    })
                  }
                />
                <br />

                <label htmlFor="label_idc" style={{ fontSize: "20px" }}> Ending date:</label>
                <input
                  className="target_classa"
                  style={{ fontSize: "20px" }}
                  id="label_idc"
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
{/* Target submit form is completed. */}
      <hr />
<div style={{backgroundColor:"blue"}}  >   
            <h1>Custom Target</h1>
        <div id="target_idd" >
          {target.map((tar, index) => (
            <>
              <div key={index} className="target_classb" onClick={()=> { navigate(`/target/${tar.id}`, {state:tar}  )}} >
                <h3  >{tar.customName}</h3>
                <p > {tar.target}  </p>
              </div>
            </>
          ))}
        </div>
        </div>
    </>
  );
}





