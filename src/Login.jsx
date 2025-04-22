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
    <div id="box"> Users can access their data by summiting their own ID.
    ID:  
    <input type="number" value={idx} onChange={ (e)=> setIdx(e.target.value)} placeholder='Enter your Id.' />
    <button onClick={ () => setId(idx) } > clik me </button>
<br/> <br/> <br/>
    {userData?.map((a)=> {  
        
    } ) }     
       </div> 
    </>
  )
}

