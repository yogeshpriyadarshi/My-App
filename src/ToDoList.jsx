import { useState, useContext } from "react";
import { FaBeer, FaUserAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Modal from "react-modal";
import axios from "axios";
import React from "react";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";

import Navbar from "./Navbar";
import { AuthContext } from "./App";

import "./ToDoList.css";

export default function ToDoList() {
  const { state, dispatch } = useContext(AuthContext);
  // console.log("data of profile", state);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [input, setInput] = useState({
    email: state.email,
    date: "",
    title: "",
    type: "",
    value: "",
  });

  function changeHandler(event) {
    setInput({ ...input, title: event.target.value });

    console.log("task input", input);
  }

  function typeHandler(e) {
    setInput({ ...input, type: e.target.value });
    console.log("task input", input);
  }
  function valueHandler(e) {
    setInput({ ...input, value: e.target.value });
    console.log("task input", input);
  }
  async function submitHandler(e) {
    e.preventDefault(); // prevent page reload
    const res = await axios.post("http://localhost:5000/todolist", { input });
    //  send data from this page to backend page then server.

    console.log("input task to backend", input);
  }

  return (
    <>
      <Navbar />
      <button onClick={() => setIsOpen(true)}> open model </button>
      {isOpen && (
        <>
          <div id="todolist_ide">
            <div id="todolist_idd">
              <p> I want to introuduce calender here </p>
              <button onClick={() => setIsOpen(false)}> Accept it </button>
            </div>
          </div>
        </>
      )}
      <h1 id="todolist_idc"> To Do List of {state.name} </h1>

      <div id="todolist_ida">
        {" "}
        <div> here todo list will be presented. </div>
        <div id="todolist_idb">
          <form onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="inputa"> Task title :</label>
            <input
              id="inputa"
              type="text"
              value={input.title}
              onChange={(event) => changeHandler(event)}
            />

            <label htmlFor="selecta"> Type: </label>
            <select
              id="selecta"
              value={input.type}
              onChange={(e) => typeHandler(e)}
            >
              <option> choose option </option>

              <option value="Regular"> Regular </option>
              <option value="Minor"> Minor </option>
              <option value="Major"> Major </option>
            </select>

            <label htmlFor="selectb"> Value: </label>
            <select
              id="selectb"
              value={input.value}
              onChange={(e) => valueHandler(e)}
            >
              <option> choose option </option>
              <option value="Important"> Important </option>
              <option value="Normal"> Normal </option>
              <option value="Hobby"> Hobby </option>
            </select>
            <button type="submit"> submit </button>
          </form>
        </div>
      </div>
    </>
  );
}
