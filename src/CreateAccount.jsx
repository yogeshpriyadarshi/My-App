import React, {useState} from 'react';
import Navbar from './Navbar'
import axios from 'axios';

export default function CreateAccount() {
const [name, setName] =useState("");
const [age, setAge] =useState("");
const [contact, setContact] =useState("");
const [fullname, setFullname] = useState("");
const [email, setEmail] = useState("");

const handleSubmit =(e)=> {
     e.preventDefault();
     let payload={ 
      name: name,
      age: age,
      contact: contact,
      email: email
     }
     axios.post("localhost:3000/user",payload);
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
         <form  onSubmit={handleSubmit} > 
          <div>
          <label >Name: </label> <br/>
          <input type="text" 
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
                placeholder="Enter Name"
                required />
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
            <input type="email" placeholder="Enter valid Email" value={email} required
            onChange={(e)=>setEmail(e.target.value) } />
          </div>
          <button > click me </button>
        </form>
    </div>
    </>
   
  )
}
