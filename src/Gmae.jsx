import React, { useState,useRef } from 'react'
import Navbar from './Navbar'
import './Game.css'

export default function Game() {
  const [value, setValue] = useState({a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"" });
  const t = useRef(0);
  function ClickHandler(res)
  {
    if(t.current===0)
    {
      setValue({... value, [res]:"X"});
      console.log("X" );
      t.current=1;
    }else{
      setValue({... value, [res]:"O"});
      console.log("O");
      t.current=0;
    }
  }
  return (
    <>
    <Navbar/>

     <div id="id_a"> 
      <div id="id_b"> <h1> Play Tic Tic  Toe</h1>
      <div>  
     <button id="a" className='class_a' onClick={(  )=> ClickHandler("a")}> {value["a"]} </button>
     <button id="b" className='class_a' onClick={(  )=> ClickHandler("b")}> {value["b"]}  </button>
     <button id="c" className='class_a' onClick={(  )=> ClickHandler("c")}>  {value["c"]} </button>
     </div>
     <div>
     <button id="d" className='class_a' onClick={(  )=> ClickHandler("d")}> {value["d"]}  </button>
     <button id="e" className='class_a' onClick={(  )=> ClickHandler("e")}> {value["e"]}  </button>
     <button id="f" className='class_a' onClick={(  )=> ClickHandler("f")}> {value["f"]} </button>
     </div>
     <div>
     <button id="g" className='class_a' onClick={(  )=> ClickHandler("g")}> {value["g"]} </button>
     <button id="h" className='class_a'onClick={(  )=> ClickHandler("h")}> {value["h"]} </button>
     <button id="i" className='class_a' onClick={(  )=> ClickHandler("i")}> {value["i"]} </button>
     </div>

     /</div>
     </div>
    
    </>
   
  )
}
