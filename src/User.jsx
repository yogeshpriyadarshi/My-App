import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './User.css'

// {
//     "id": 1,
//     "first_name": "Tony",
//     "last_name": "Haycraft",
//     "email": "thaycraft0@kickstarter.com",
//     "gender": "Male",
//     "mobile": "184-474-5255"
// },

export default function User() {

 const [userData, setuserData] = useState([]);
 const [id, setId] = useState();
 const [idx, setIdx] =useState();

useEffect(() => {

   getuserdata()
  
 }, [id]);
 
 async function getuserdata(){
let response = await axios.get(`http://127.00.1:3000/users/${id}`)
console.log(response);
setuserData([response.data]);


 }
  return (
    <>
     <Navbar/>
    <div> Users can access their data by summiting their own ID. </div> <br></br>
     ID:  
    <input type="number" value={idx} onChange={ (e)=> setIdx(e.target.value)} placeholder='Enter your Id.' />
    <button onClick={ () => setId(idx) } > clik me </button>
<br/> <br/> <br/>
    {userData?.map((a)=> {  
         return(
            <>
            <div id="box">           

            <div class ="card">
               First Name: {a?.first_name}
            </div>
            <div class ="card">
                   Last Name: {a?.last_name}
            </div>
            <div class ="card">
                   Email: {a?.email}
            </div>
            <div class ="card">
                   Gender: {a?.gender}
            </div>
            <div class ="card">
                   Mobile: {a?.mobile}
            </div>




            </div>
            
            </>
         )
    })}

    </>


  )
}
