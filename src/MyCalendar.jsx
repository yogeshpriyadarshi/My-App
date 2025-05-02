import React from 'react'
import { useState, createContext, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { AuthContext } from "./App";

import { FaRegCalendarCheck } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import './App';
import './MyCalendar.css';
 
function MyCalendar() {
    const { state, dispatch } = useContext(AuthContext);
  const [value, setValue] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [isOpen, setIsOpen] = useState(false);

  function dateHandler(event){
    setValue( moment(event).format("YYYY-MM-DD") );
    console.log("date after selction dateHandler", value);
    setIsOpen(false);
      }
useEffect(
()=>{

  console.log("updating to date",value); 
  const Date = { date: value}  
  console.log("object of date",Date);
   dispatch( {type: "UPDATEDATE", date:Date})
},[value]);


  return (
    <>  
    <div>  

    <button  onClick={()=> setIsOpen(true)}> <FaRegCalendarCheck size={40} color="blue" />
           {value}      </button>
    
          {isOpen && (
            <>
               <div id="calendar_ida">
                <div id="calendar_idb">
                 <Calendar onChange={(event)=> dateHandler(event)} value={value} /> 
                </div>
              </div> 
            </>
          )}
    </div>
    </>
  );
}
export default MyCalendar;
