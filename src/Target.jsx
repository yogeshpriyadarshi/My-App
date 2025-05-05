import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import "./Target.css";
import { AuthContext } from "./App";
import axios from "axios";
import { parse } from "date-fns";
import moment from "moment";

export default function Target() {
  const { state, dispatch } = useContext(AuthContext);
  const [aim, setAim] = useState({
    email: state.email,
    type: " ",
    customName: " ",
    year: 2025,
    month: "may",
    firstDate: 0,
    lastDate: 0,
    setTarget: " ",
  });
  function typeHandler(e) {
    setAim({ ...aim, type: e.target.value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    console.log("print aim from fronted to backend",aim);
    const res = await axios.post("http://localhost:5000/setTarget", aim);
  }

  return (
    <>
      <Navbar />
      <div>
        <h3>Add target</h3>
        <form onSubmit={(e) => submitHandler(e)}>
          <select
            value={aim.type}
            onChange={(e) => {
              typeHandler(e);
            }}
          >
            <option value=""> select name of target</option>
            <option value="Custom"> Custom </option>
            <option value="Weekly"> Weekly </option>
            <option value="Monthly"> Monthly </option>
            <option value="Yearly"> Yearly </option>
          </select>

          {aim.type === "Custom" && (
            <div>
              <label> Target Name </label>
              <input
                type="text"
                value={aim.customName}
                onChange={(e) => {
                  setAim({ ...aim, customName: e.target.value });
                }}
              />
              <br />
              <label> Starting date:</label>
              <input type="date"  onChange={(e)=>setAim({...aim, firstDate:moment(e.target.value).format("YYYY-MM-DD")})} />
              <br />

              <label> Ending date:</label>
              <input type="date" onChange={(e)=>setAim({...aim, lastDate:e.target.value})} />
              <br />
              
              <label>  Set Target</label>
              <input type="text" onChange={(e)=>setAim({...aim, setTarget:e.target.value})}  />
              <br/>

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
          <button type="submit"> Submit </button>
        </form>
      </div>
        <hr/>
<div>     

show custom  target  and allow to  update status <br/>
<label> selcet custom target </label> <br/>
<select>      
<option>  ...choose....</option>
<option>  first custom  </option>
<option>  second custom  </option>
<option>  second custom  </option>
</select>


</div>


    </>
  );
}
