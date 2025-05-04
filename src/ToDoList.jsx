import { useState, useContext, useEffect } from "react";
import { FaBeer, FaUserAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import moment from "moment";
import Modal from "react-modal";
import axios from "axios";
import React from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from "./Navbar";
import { AuthContext } from "./App";

import "./ToDoList.css";
import MyCalendar from "./MyCalendar";

export default function ToDoList() {
  const { state, dispatch } = useContext(AuthContext);
  const [resTask, setResTask] = useState([]);
  const [run, setRun]=useState(0);
  // const [date, setDate] =useState();
  const [input, setInput] = useState({
    email: state.email,
    date: "",
    title: "",
    type: "",
    value: "",
  });

  function changeHandler(event) {
    setInput({ ...input, title: event.target.value });
  }

  function typeHandler(e) {
    setInput({ ...input, type: e.target.value });
  }
  function valueHandler(e) {
    setInput({ ...input, value: e.target.value });
  }
  async function submitHandler(e) {
    e.preventDefault(); // prevent page reload
    // setInput({...input, date:state.date});


    console.log("input task to backend", input);

    const res = await axios.post("http://localhost:5000/todolist", { ...input, date:state.date });
    console.log("response for backend", res);
    if (res.data.success) {
      viewTaks();
      setInput({
        email: state.email,
        date: state.date,
        title: "",
        type: "",
        value: "",})
      alert("task is added.");

    //  send data from this page to backend page then server.
  }
}
 
useEffect( ()=> {  viewTaks()  }, [state.date]  );

  async function viewTaks() {
    const res = await axios.get("http://localhost:5000/viewtasks", {
      params: { email: state.email, date: state.date },
    });
    console.log("response for backend", res.data);
    setResTask(res.data);
  }
async function updateTask(){
  console.log("final update Task",resTask);

  const res =await axios.post("http://localhost:5000/updatetask", resTask );

}


  return (
    <>
      <Navbar />

      <div id="todolist_ida">
        <h1 id="todolist_idb"> To Do List of {state.name} </h1>
        <MyCalendar />
      </div>

      <div id="todolist_idc">
        <div>
          {" "}
          <h1> All tasks of {state.date} </h1>
          <table>
            <thead>
              <tr>
                <th> Task No. </th>
                <th> Task </th>
                <th> type </th>
                <th> value </th>
                <th> Point </th>
                <th> Remark </th>

              </tr>
            </thead>
            <tbody>
              {resTask.map((task, index) => (
                
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {task.title} </td>
                  <td> {task.type} </td>
                  <td> {task.value} </td>

                  <td> <input type="number"  value={ task.point === null ? 0 : task.point}
                   onChange={ (e)=> setResTask (preTask => preTask.map((t,i) => i===index ? { ...t, point: e.target.value } : t)) } /> </td>

                  <td>  <input type="text" value={ task.remark === null ? " " : task.remark}
                   onChange={ (e)=> setResTask (preTask => preTask.map((t,i) => i===index ? { ...t, remark: e.target.value } : t)) } /> </td>
                </tr>
              ))}
            </tbody>
          </table>

         <button onClick={()=>updateTask()} >  Submit </button> 


        </div>

        <div>
          <form onSubmit={(e) => submitHandler(e)}>
            <div id="todolist_idh">
              <label htmlFor="inputa"> Task title :</label>
              <input
                id="inputa"
                className="todolist_classa"
                type="text"
                value={input.title}
                onChange={(event) => changeHandler(event)}
              />

              <label htmlFor="selecta"> Type: </label>
              <select
                className="todolist_classa"
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
                className="todolist_classa"
                id="selectb"
                value={input.value}
                onChange={(e) => valueHandler(e)}
              >
                <option> choose option </option>
                <option value="Important"> Important </option>
                <option value="Normal"> Normal </option>
                <option value="Hobby"> Hobby </option>
              </select>
             <br/>
              <button className="todolist_classa" type="submit">
                {" "}
                submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
