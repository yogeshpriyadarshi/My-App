import React, {useState} from 'react';
import Navbar from './Navbar'

export default function CreateAccount() {
const [name, setName] =useState("");
const [age, setAge] =useState("");
const [contact, setContact] =useState("");
const [fullname, setFullname] = useState("");
const [email, setEmail] = useState("");

const handleSubmit =()=> {
    //  e.Prevent.Default();
    console.log("name:", name);
    console.log("Age:", age);
    setFullname(name);
};

  return(
    <>
    <Navbar/>
    <div>
        <h1>Create Free Account! </h1>
        <h3> hello {fullname} </h3>
        {/* <form > */}
          {/* onSubmit={handleSubmit} > */}
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
          <div>
            <label>Contact Number:</label> <br/>
            <input type="number" 
                   placeholder='Contact Number'
                   value={contact}
                   onChange={(e)=> setContact(e.target.value) }
            />
          </div>
          <div>
            <label>Eamail:</label> <br/>
            <input type="email" placeholder="Enter valid Email" value={email} 
            onChange={(e)=>setEmail(e.target.value) } />
          </div>
          <button onClick={handleSubmit}> click me </button>
        {/* </form> */}
    </div>
    </>
   
  )
}
