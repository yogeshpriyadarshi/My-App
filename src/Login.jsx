import { useEffect,useState } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import  './Login.css';

export default function Login() {

 const [userData, setuserData] = useState([]);
 const [id, setId] = useState();
 const [idx, setIdx] =useState();

useEffect(() => {
   getuserdata()
 }, [id]);
 
 async function getuserdata(){
// let response = await axios.get(`http://127.00.1:5000/users/${id}`)
console.log(response);
setuserData([response.data]);


 }
  return (
    <>
     <Navbar/>
      
      <div id="login_c">     

     <div id="login_a">
      <level > <p className ="Login_class" > Email </p></level>
      <input className='login_in' type="email"  />
      <br/><br/>
      <level > <p className ="Login_class" > Password </p></level>
      <input className='login_in' type="password"  />
      <br/><br/>
      <button id="login_b" type="submit"> Log in </button>

      </div>
     </div>
    
    </>
  )
}

