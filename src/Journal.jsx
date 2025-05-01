import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import './Journal.css';
import { SlCalender } from "react-icons/sl";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { AuthContext } from "./App";

export default function Analysis() {
 
  const { state, dispatch } = useContext(AuthContext);
  const [feedback, setFeedback] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [date , setDate]= useState(new Date().toISOString().slice(0,10));
    // const date =new Date().toISOString().slice(0,10);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Feedback:", feedback);
    // You can send it to a server using fetch/axios here
  };

  function dateHandler(event){
    setDate( event.toISOString().slice(0,10) );
    setIsOpen(false);
      }

  return (
    <>
    <Navbar/>
    <div>   
    <div id="journal_ida"> <h3>This journal belogn to {state.name} </h3>
    {isOpen && (   
      <div id="journal_idc"> 
<div id="journal_idd">    

<Calendar onChange={(e)=> dateHandler(e)} value={date} />

</div >

      </div>
    )}
           <h3> Show date here</h3>
           <button onClick={()=>setIsOpen(true)} > date<SlCalender size={40} color="blue" /> {date} </button>
    </div>
<div id="journal_idb">
<div>
  
    <form onSubmit={handleSubmit}>
      <label> what is special today....  </label><br />
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows="25"
        cols="50"
        placeholder="write about Today!"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  
   </div>


<div>     to do list </div>

</div>


    </div>
   
    </>
    
  )

}
