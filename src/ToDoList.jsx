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
  const [isOpen, setIsOpen] = useState(false);
  const [resTask, setResTask] = useState([]);

  const date =new Date().toISOString().slice(0,10);
  const [input, setInput] = useState({
    email: state.email,
    date: date,
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
    console.log("input task to backend", input);
  
    const res = await axios.post("http://localhost:5000/todolist", { input });
    console.log("response for backend",res);
    if(res.data.success)
    {
      alert("task is added.");
    }
    //  send data from this page to backend page then server.
  }
  useEffect( ()=> {

viewTaks();
  },[input.date]);

  async function viewTaks(){
     const res = await axios.get("http://localhost:5000/viewtasks", {params:{email:state.email, date:input.date}});
console.log("response for backend",resTask.data);
setResTask(res.data);
  }
    

  return (
    <>
      <Navbar />

<div id="todolist_ida"> 
<h1 id="todolist_idb"> To Do List of {state.name} </h1>
<MyCalendar/>
      </div>
<div id="todolist_idc"> 

     <div> <h1> this date all tasks</h1>

    <table>
<thead>
<tr>
  <th> Task No. </th>
  <th> Task </th>
  <th> type </th>
  <th> value </th>
</tr>
</thead>
<tbody>

  { resTask.map((task,index)=>(  
  <tr>
    <td> {index+1} </td>
    <td> {task.title}  </td>
    <td> {task.type} </td>
    <td> {task.value} </td>
    </tr>
  ))
  }
   
</tbody>
    </table>     

    <button onClick={()=>viewTaks()}> veiw tasks of {input.date} </button>
       </div>

          <div> 
          <form  onSubmit={(e) => submitHandler(e)}>
          <div id="todolist_idh" >
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
            </div>
          </form>

          </div>
         
          </div>
    
    </>
  );
}
