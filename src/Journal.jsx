import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import './Journal.css';
import { AuthContext } from "./App";


export default function Analysis() {
 
  const { state, dispatch } = useContext(AuthContext);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Feedback:", feedback);
    // You can send it to a server using fetch/axios here
  };

  return (
    <>
    <Navbar/>
    <div>   
    <div id="journal_ida"> <h3>This journal belogn to {state.name} </h3>
           <h3> Show date here</h3>
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
