import React, {useState} from 'react';
import Navbar from './Navbar'

export default function CreateAccount() {
const [name, setName] =useState("");
const [age, setAge] =useState("");

const handleSubmit =(event)=> {
    event.Prevent.Default();
    console.log("name:", name);
    console.log("Age:", age);
};
  return (
    <>
    <Navbar/>
    <div>
        <h1>Create Free Account! </h1>
        <form onSubmit={handleSubmit} >
          <div>
          <label >Name: </label> <br/>
          <input type="text" 
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
                placeholder="Enter Name" />
          </div>
          <div>
          <label>Age:</label> <br/>
          <input type="number" 
          value={age}
          onChange={(e)=> setAge(e.target.value)}
          placeholder="Age" />
          </div>
          <br/>
          <button type="submit"> Sumbit </button>
        </form>
    </div>
    </>
   
  )
}
