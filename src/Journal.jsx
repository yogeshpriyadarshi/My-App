import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import "./Journal.css";
import { SlCalender } from "react-icons/sl";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { AuthContext } from "./App";
import MyCalendar from "./MyCalendar";
import axios from "axios";

export default function Analysis() {
  const { state, dispatch } = useContext(AuthContext);
  const [feedback, setFeedback] = useState("");
  const [resTask, setResTask] = useState([]);
let total=0;
  useEffect( ()=>{ viewTaks() },[state.date] );

  resTask.map( (task, index)=>total= total + task.point  );
  // setTotal(total);

  async function handleSubmit(e){
    e.preventDefault();
    const journal= {email:state.email, date:state.date, daythought: feedback}
    // You can send it to a server using fetch/axios here
    console.log("feedback forntend",journal);
   const res = await axios.post("http://localhost:5000/daythought", journal);
  }

  async function viewTaks() {
    const res = await axios.get("http://localhost:5000/viewtasks", {
      params: { email: state.email, date: state.date },
    });
    console.log("response for backend", res.data);
    setResTask(res.data);
  }
 
  return (
    <>
      <Navbar />
      <div>
        <div id="journal_ida">
          {" "}
          <h3>This journal belogn to {state.name} </h3>
          <MyCalendar />
        </div>

        <div id="journal_idb">
          <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
              <label> what is special today.... </label>
              <br />
              <textarea
              id="journal_idc"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="write about Today!"
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div> 
            <h2> My to do list </h2>
            <table>
            <thead>
              <tr>
                <th> Task No. </th>
                <th> Task </th>
                <th> type </th>
                <th> value </th>
                <th>  point  </th>
                <th> Remark </th>
              </tr>
            </thead>
            <tbody>
              {resTask.map((task, index) => ( 
                <tr>
                  <td> {index + 1} </td>
                  <td> {task.title} </td>
                  <td> {task.type} </td>
                  <td> {task.value} </td>
                  <td>{task.point}</td>
                  <td> {task.remark} </td>
                </tr>
              ))}
            </tbody>
          </table>

            <button >  Total point: {total}  </button>
            </div>
        </div>
      </div>
    </>
  );
}
