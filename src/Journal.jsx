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

  const [resTask, setResTask] = useState([]);
  const [journal, setJournal] = useState({
    id: 0,
    email: state.email,
    date: state.date,
    daythought: " ",
    point: 0
  });

  useEffect(() => {
    viewTaks()
    viewDayThought();
  }, [state.date]);


  let total = 0;
  resTask.map((task, index) => (total = total + task.point));
  // setTotal(total);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("feedback forntend", journal);
    const res = await axios.post("http://localhost:5000/daythought",{ ...journal, point:total});
  }

  async function viewTaks() {
    const res = await axios.get("http://localhost:5000/viewtasks", {
      params: { email: state.email, date: state.date },
    });
    console.log("response for backend for viewTask", res.data);
    setResTask(res.data);
  }

  async function viewDayThought() {
    const res = await axios.get("http://localhost:5000/viewdaythought", {
      params: { email: state.email, date: state.date },
    });

    console.log("response for backend for  journal", res.data);
    if(res.data[0].length === 0)
    {
      setJournal({
        id: 0,
    email: state.email,
    date: state.date,
    daythought: " ",
    point: 0
      }
      )
    } else{
        setJournal(res.data[0][0]);
    }
  }

  return (
    <>
      <Navbar />
      <div>
        <div id="journal_ida">
          {" "}
          <h1 style={{color:"white"}}>This journal belogn to {state.name} </h1>
          <MyCalendar />
        </div>

        <div id="journal_idb">
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label style={{fontSize:"30px",color:"white"}}> what is special today... </label>
              <br />
              <textarea
              
                id="journal_idc"
                value={journal?.daythought}
                onChange={(e) =>
                  setJournal({ ...journal,     daythought : e.target.value })
                }
                placeholder="write about Today!"
              />
              <br />
              <button  type="submit">Submit</button>
            </form>
          </div>
         <div style={{border:"1px solid black"}}></div>
          <div>
            <h2 style={{color:"white"}}> My to do list </h2>
            <table>
              <thead>
                <tr>
                  <th> Task No. </th>
                  <th> Task </th>
                  <th> type </th>
                  <th> value </th>
                  <th> point </th>
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

            <button> Total point: {total} </button>
          </div>
        </div>
      </div>
    </>
  );
}
