import React from 'react'
import { useLocation } from 'react-router-dom';


export default function Target_id() {
    const location = useLocation();
    const {Target} = location.tar || {}; // fallback to empty object
  console.log("target",Target);
    return (
   <div> do it </div>
    );



  
}



function DestinationComponent() {
  
}
