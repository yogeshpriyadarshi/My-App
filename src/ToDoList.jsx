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
  const { globalState, dispatch } = useContext(AuthContext);
  const [resTask, setResTask] = useState([]);
  const [run, setRun]=useState(0);
  const [input, setInput] = useState({
    email: globalState.email,
    date: "",
    title: "",
    type: "",
    value: "",
  });


  const givenDate = new Date(globalState.date);
  const today = new Date();
  
  // Reset time to midnight to compare only dates
  givenDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  
  // Calculate difference in milliseconds
  const diffInMs = today - givenDate;
  
  // Convert milliseconds to days
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  console.log(`Difference in days: ${diffInDays}`);
  


  function changeHandler(event) {
    setInput({ ...input, title: event.target.value });
  }

  function typeHandler(e) {
    setInput({ ...input, type: e.target.value });
  }
  function valueHandler(e) {
    setInput({ ...input, value: e.target.value });
  }
  function pointHandler(e,index){
    setResTask (preTask => preTask.map((t,i) => i===index ? { ...t, point: e.target.value } : t))
  }
  async function submitHandler(e) {
    e.preventDefault(); 
    console.log("input task to backend", input);
    const res = await axios.post("http://localhost:5000/todolist", { ...input, date:globalState.date });
    console.log("response for backend", res);
    if (res.data.success) {
      viewTaks();
      setInput({
        email: globalState.email,
        date: globalState.date,
        title: " ",
        type: " ",
        value: " ",})
    //  send data from this page to backend page then server.
  }
}
 console.log("resTask",resTask)
useEffect( ()=> {  viewTaks()  }, [globalState.date]  );

  async function viewTaks() {
    const res = await axios.get("http://localhost:5000/viewtasks", {
      params: { email: globalState.email, date: globalState.date },
    });
    console.log("response for backend view Tasks done", res.data);

    setResTask([...res.data]);
  }
  

async function updateTask(){
  console.log("final update Task",resTask);

  const res =await axios.post("http://localhost:5000/updatetask", resTask );
}

  return (
    <>
      <Navbar />

      <div id="todolist_ida">
        <h1 id="todolist_idb"> To Do List of {globalState.name} </h1>
        <MyCalendar />
      </div>

      <div id="todolist_idc">
        <div>
          {" "}
          <h1> All tasks of {globalState.date} </h1>
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
                
                <tr key={index.toString()}>
                  <td> {index + 1} </td>
                  <td> {task.title} </td>
                  <td> {task.type} </td>
                  <td> {task.value} </td>

                  <td> <input  id="todolist_idi" type="number"  value={ task?.point?task.point:0}
                   onChange={ (e)=> pointHandler(e,index) } /> </td>

                  <td>  <input id="todolist_idj" type="text" value={ task?.remark?task.remark:" "}
                   onChange={ (e)=> setResTask (preTask => preTask.map((t,i) => i===index ? { ...t, remark: e.target.value } : t)) } 
                     disabled={diffInDays>1}   /> </td>
                </tr>
              ))}
            </tbody>
          </table>

         <button onClick={()=>updateTask()} >  Submit </button> 


        </div>
  
<div style={{border:"0.5px solid black"}}  >   </div>

        <div>
          <form onSubmit={(e) => submitHandler(e)}>
            <div id="todolist_idh">
<h3> Add task of {globalState.date}</h3>
<hr/>
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
                Add Task{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
