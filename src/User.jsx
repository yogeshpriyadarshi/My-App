import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
 const [id, setid] = useState(1);
    useEffect(() => {

   getuserdata()
 
   
 }, [id]);
 
 async function getuserdata(){
let response= await axios.get(`http://127.00.1:3000/users/${id}`)
console.log(response);
setuserData([response.data]);

 }


  return (
    <>
    <div>User</div>
    {userData?.map((a)=> {  

         return(
            <>
            
            <div>
                {a?.first_name}
            </div>
            <div>
                    {a?.last_name}
            </div>
            
            </>
          
         )

    })}

    </>


  )
}
