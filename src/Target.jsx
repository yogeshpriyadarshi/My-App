import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import "./Target.css";
import { AuthContext } from "./App";
import axios from "axios";

export default function Target() {
  const { state, dispatch } = useContext(AuthContext);

  const [yeartarget, setYeartarget] = useState({
    email: state.email,
    year: 0,
    year_target: " ",
  });

  function yearHandler(e) {
    setYeartarget({ ...yeartarget, year: e.target.value });
  }
  function targetHandler(e) {
    setYeartarget({ ...yeartarget, year_target: e.target.value });
  }
 async function submitHandler(e) {
    e.preventDefault();
   const res = await axios.post(" http://localhost:5000/yeartarget ",yeartarget);

  }
  

  return (
    <>
      <Navbar />
      <div id="target_ida">
     

      </div>
    </>
  );
}
