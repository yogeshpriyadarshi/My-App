import React from 'react'
import { useState,createContext } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './App';
 
const AuthCalendar =createContext();
export{AuthCalendar};

function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <>  
    
    <AuthCalendar.Provider value={{value,setValue}}>
    <div>
      <Calendar onChange={setValue} value={value} />
    </div>
    <APP />
    </AuthCalendar.Provider>


    </>
  );
}
export default MyCalendar;
