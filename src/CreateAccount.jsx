import React, {useState} from 'react';
import Navbar from './Navbar'
import axios from 'axios';
import './CreateAccount.css'

export default function CreateAccount() {
  const [user, setUser] = useState({Name:"",email:"", pass:"",number: "" });

// const [name, setName] =useState("");
// const [pass, setPass] =useState("");
// const [contact, setContact] =useState("");
// const [fullname, setFullname] = useState("");
// const [email, setEmail] = useState("");
// const [gender, setGender] = useState('');

const handleSubmit = async (e)=> {
     e.preventDefault();
    try{ // http://localhost:5000/user
      const res = await axios.post("http://localhost:5000/user",user);
      console.log(res.data);
      setUser({Name:"",email:"", pass:"",number: "" })
      alert("Creation of account is successful.")
    }catch(err){
      console.error("error sending", err);
    }
  
};

  return(
    <>
    <Navbar/>
    <div id="idx">
        <h1>Create Free Account! </h1>
         <form  onSubmit={handleSubmit} > 
          <div>
          <label >Name: </label> <br/>
          <input type="text" 
                 value={user.Name}
                 onChange={(e)=> setUser({...user, Name: e.target.value})}
                 placeholder="Enter Name"
                 required />
          </div>

          <div>
            <label>Email:</label> <br/>
            <input type="email" placeholder="Enter valid Email" value={user.email} required
            onChange={(e)=>setUser({...user, email: e.target.value}) } />
          </div>

          <div>
          <label> Set your Password:</label> <br/>
          <input type="password" 
          value={user.pass}
          onChange={(e)=> setUser({...user, pass:e.target.value})}
          placeholder="Password" />
          </div>
          <div>
            <label>Contact Number:</label> <br/>
            <input type="number" 
                   placeholder='Contact Number'
                   value={user.number}
                   onChange={(e)=> setUser({...user, number:e.target.value}) }
            />
          </div>  
      <br />
          <button type="submit">Submit</button>
        </form>
    </div>
    </>
   
  )
}
