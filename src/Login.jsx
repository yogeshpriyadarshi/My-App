import { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

import Navbar from './Navbar';
import  './Login.css';

export default function Login() {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error , setError] =useState();

async function ClickHandler(){
  console.log(email)
  console.log(password)
  const res = await axios.get("http://localhost:5000/users");
 console.log(res.data);
 console.log(res.data[7].email)

 for(let k=0; k<8;k++)
 {
 if (email=== res.data[k].email && password===res.data[k].password){
  console.log("email is:",email);
  console.log("password is:",password);
  alert("Login successful");
  return true;
 }
}
return false;
}

  return (
    <>
     <Navbar/>
      
      <div id="login_c">     

     <div id="login_a">
       <p className ="Login_class" > Email </p>
      <input className='login_in' type="email"value={email} placeholder='Enter Email' 
      onChange={(e)=> setEmail(e.target.value)}   />
      <br/>
       <p className ="Login_class"  > Password </p>
      <input className='login_in' type="password" placeholder="password"
      onChange={(e)=>setPassword(e.target.value)} />
      <br/><br/>
      <Link className="tab" to="/user" onClick={()=> ClickHandler() }   >Login</Link>

      {/* <button id="login_b" type="submit" onClick={()=> ClickHandler() } > Log in </button> */}

      </div>
     </div>
    
    </>
  )
  }