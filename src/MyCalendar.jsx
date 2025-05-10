import React from "react";
import { useState, createContext, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { AuthContext } from "./App";

import { FaRegCalendarCheck } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
import "./App";
import "./MyCalendar.css";

function MyCalendar() {
  const { globalState, dispatch } = useContext(AuthContext);
  const [value, setValue] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [isOpen, setIsOpen] = useState(false);

  function dateHandler(event) {
    setValue(moment(event).format("YYYY-MM-DD"));
    console.log("date after selction dateHandler", value);
    setIsOpen(false);
  }
  useEffect(() => {
    const Date = { date: value };
    dispatch({ type: "UPDATEDATE", date: Date });
  }, [value]);

  return (
    <>
      <div>
        <button id="calendar_idc" onClick={() => setIsOpen(true)}>
          {" "}
          <FaRegCalendarCheck size={30} color="blue" />
          {value}{" "}
        </button>

        {isOpen && (
          <>
            <div id="calendar_ida">
              <div id="calendar_idb">
                <Calendar
                  onChange={(event) => dateHandler(event)}
                  value={value}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default MyCalendar;
