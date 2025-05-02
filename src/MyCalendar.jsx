import React from 'react'
import { useState, createContext, useContext } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { AuthContext } from "./App";

import { FaRegCalendarCheck } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import './App';
import './MyCalendar.css';
 
function MyCalendar() {
    const { state, dispatch } = useContext(AuthContext);
  const [value, setValue] = useState(moment(new Date()).format("DD-MM-YYYY"));
  const [isOpen, setIsOpen] = useState(false);

  function dateHandler(event){
    setValue( moment(event).format("DD-MM-YYYY") );
    dispatch( {type: "UPDATEDATE", date:value})
    setIsOpen(false);
      }

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
