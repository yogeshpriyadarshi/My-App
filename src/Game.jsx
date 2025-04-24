import React, { useState,useRef, useEffect } from 'react'
import Navbar from './Navbar'
import './Game.css'

export default function Game() {

  const [value, setValue] = useState({a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"" });
  useEffect(()=> {console.log("value", value) },[value]);

  const t = useRef(0);
  function ClickHandler(res)
  {
    if(value[res]){
      return;
    }
    if(t.current===0)
    {
      setValue({...value, [res]:"X"});
      console.log("X" );
      t.current=1;
    }else{
      setValue({...value, [res]:"O"});
      console.log("O");
      t.current=0;
    }
  }
  return (
    <>
    <Navbar/>

     <div id="id_a"> 
      <div id="id_b"> <h1> Play Tic Tic  Toe</h1>
      <div style ={ {display:"flex",flex:1,flexDirection:"row"}}>  
     <div id="a" className='class_a' onClick={(  )=> ClickHandler("a")}> {value["a"]}  </div>
     <div id="b" className='class_a' onClick={(  )=> ClickHandler("b")}> {value["b"]}  </div>
     <div id="c" className='class_a' onClick={(  )=> ClickHandler("c")}>  {value["c"]} </div>
     </div>
     <div style ={ {display:"flex",flex:1,flexDirection:"row"}}>
     <div id="d" className='class_a' onClick={(  )=> ClickHandler("d")}> {value["d"]}  </div>
     <div id="e" className='class_a' onClick={(  )=> ClickHandler("e")}> {value["e"]}  </div>
     <div id="f" className='class_a' onClick={(  )=> ClickHandler("f")}> {value["f"]} </div>
     </div>
     <div style ={ {display:"flex",flex:1,flexDirection:"row"}}>
     <div id="g" className='class_a' onClick={(  )=> ClickHandler("g")}> {value["g"]} </div>
     <div id="h" className='class_a'onClick={(  )=> ClickHandler("h")}> {value["h"]} </div>
     <div id="i" className='class_a' onClick={(  )=> ClickHandler("i")}> {value["i"]} </div>
     </div>
     <button className='class_b' onClick={()=> setValue({a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"" })}>Reset</button>
     <button className='class_b' onClick={()=> setValue({a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"" })}>  </button>

     </div>
     </div>
    
    </>
   
  )
}
