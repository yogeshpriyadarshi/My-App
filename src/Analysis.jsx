import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Analysis() {
  const [dat,setDat]=useState({n:"",m:""});

  function update()
  {
    console.log("a")
    console.log("b")
    setTimeout(() => {
      console.log("z")

    },500);
    console.log("c")
    console.log("d")

    
//     console.log("first",dat)
//     setDat({...dat,m:"abd"});
//     console.log("second",dat)
//     setDat((prev)=>{
// console.log("prev value",prev)   
// return {...prev,n:"abdeodj"};   
//     });
//     console.log("last",dat);
    

  }
  return (
    <>
    <Navbar/>
    
    <div > Analysis your point and take optimal decision.</div>
    <button onClick={()=>update()}> dat {JSON.stringify(dat)} </button>
    </>
    
  )
}
