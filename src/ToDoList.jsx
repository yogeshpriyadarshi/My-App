import { useState } from "react";
import { FaBeer, FaUserAlt,   } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";
import Modal from 'react-modal';

import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./ToDoList.css";

export default function ToDoList() {
  const [input,setInput]=useState({title:"", type:"", value:""});
  
  function changeHandler(event){
          setInput({...input, title: event.target.value});
  }

  function typeHandler(e){
    setInput({...input, type:e.target.value});
  }
  function valueHandler(e){
    setInput({...input, value:e.target.value});
  }
  
  

  return (
    <>
      <Navbar />
 
      <h1 id="todolist_idc"> To Do List </h1>
    
      <div id="todolist_ida">
        {" "}
<div>   here todo list will be presented.  </div>

          <div className="todolist_classa">

          <label htmlFor="inputa"> Task title :</label>
            <input
              id="inputa"
              type="text"
              placeholder={`Enter your task `}
              value={input.title}
              onChange={(event) => changeHandler(event)}
            />


            <label htmlFor="selecta"> Type: </label>
            <select
              id="selecta"
              value= {input.type}
              onChange={(e) => typeHandler(e)}
            >
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
              <option value="Important"> Important </option>
              <option value="Normal"> Normal </option>
              <option value="Hobby"> Hobby </option>
            </select>
           

          </div>
      </div>
    </>
  );
}

