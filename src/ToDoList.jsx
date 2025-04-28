import { useState } from "react";
import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./ToDoList.css";

export default function ToDoList() {
  const [date, setDate]=useState("");
  const [inputs, setInputs] = useState([{type: "", value: "", name: "",  }]);

  function typeHandler(e, index) {
    const newInput = [...inputs];
    newInput[index].type = e.target.value;
    setInputs(newInput);
    console.log(inputs);
  }
  function valueHandler(e, index) {
    const newInput = [...inputs];
    newInput[index].value = e.target.value;
    setInputs(newInput);
    console.log(inputs);
  }
  function changeHandler(event, index) {
    const newInput = [...inputs];
    newInput[index].name = event.target.value;
    setInputs(newInput);
    console.log(inputs);
  }
  function removeHandler(index) {
    console.log(index);
    const newInput = [...inputs];
    newInput.splice(index, 1);
    console.log(newInput);
    setInputs(newInput);
  }
  function addHandler() {
    const newInput = [...inputs];
    newInput.push({ type: "", value: "", name: "" });
    setInputs(newInput);
  }
  async function submitHandler() {
    console.log(inputs);
    const res = await axios.post("http://localhost:5000/to_do_list", inputs);
  }

  return (
    <>
      <Navbar />
      <h1 id="todolist_idc"> To Do List </h1>

      <div id="todolist_ida">
        {" "}
        <h1 id="todolist_idb"> Tasks</h1>
        <input
              id="inputb"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />

        {inputs.map((input, index) => (
          <div key={index} className="todolist_classa">
            <label htmlFor="selecta"> Type: </label>
            <select
              id="selecta"
              value={input.type}
              onChange={(e) => typeHandler(e, index)}
            >
              <option value="Minor"> Minor </option>
              <option value="Medium"> Medium </option>
              <option value="Major"> Major </option>
            </select>
            <label htmlFor="selectb"> Value: </label>
            <select
              id="selectb"
              value={input.value}
              onChange={(e) => valueHandler(e, index)}
            >
              <option value="Important"> Important </option>
              <option value="Normal"> Normal </option>
              <option value="Hobby"> Hobby </option>
            </select>
            <label htmlFor="inputa">Name of Task:</label>
            <input
              id="inputa"
              type="text"
              placeholder={`Enter your task no ${index + 1}`}
              value={input.name}
              onChange={(event) => changeHandler(event, index)}
            />

          
            <button onClick={() => removeHandler(index)}>
              {" "}
              Remove This Task.{" "}
            </button>
          </div>
        ))}
        <button onClick={() => addHandler()}> Add new task.</button>
        <button type="submit" onClick={() => submitHandler()}>
          Submit
        </button>
      </div>
    </>
  );
}
