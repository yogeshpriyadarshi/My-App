import React, { useState,useRef, useEffect } from 'react'
import Navbar from './Navbar'
import './Game.css'

export default function Game() {
  const check= [ "abc","adg",'aci','bch','cfi','ceg','def','ghi'];

  // let player1 = useRef([ ]);
  // let player2 = useRef([ ]);

  const [player1, setPlayer1] =useState([]);
  const [player2, setPlayer2] =useState([]);

  const [value, setValue] = useState({a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"" });

  function reSetAll()
  {
    setValue({a:"",b:"",c:"",d:"",e:"",f:"",g:"",h:"",i:"" });
    setPlayer1([]);
    setPlayer2([]);
  }
  
  useEffect(()=> {
    console.log(player1);
    console.log("checking winning condition of player1!");

    for(let k=0;k<8;k++)
      {   let q=0;
        for(let i=0;i<3;i++){
          for(let j=0;j<player1.length;j++)
          {
            if(check[k][i]===player1[j] )
            {
              q++;
              if(q===3)
              {
                console.log("player1 is winner!")
                // return true;
              }
            } 
          }
    }
      }



  },[player1]);


  useEffect(()=> {
    console.log(player2);
    console.log("checking winning condition of player2!");

    for(let k=0;k<8;k++)
      {   let q=0;
        for(let i=0;i<3;i++){
          for(let j=0;j<player2.length;j++)
          {
            if(check[k][i]===player2[j] )
            {
              q++;
              if(q===3)
              {
                console.log("player2 is winner!")
                // return true;
              }
            } 
          }
    }
      }
  },[player2]);



  const t = useRef(0);
  function ClickHandler(res)
  {
    if(value[res]){
      return;
    }
    if(t.current===0)
    {
      setValue({...value, [res]:"X"});
      // player1.current.push(res);
      // console.log("X",player1,player1.length);

      setPlayer1([...player1, res ]);
      //  console.log("X",player1,player1.length);
      // console.log(check);
    //  winning conditions
         t.current=1;
    }else{
      setValue({...value, [res]:"O"});
      setPlayer2([...player2, res]);
      // player2.current.push(res);

      // console.log("O",player2);
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
     <button className='class_b' onClick={()=> reSetAll()}>Reset</button>

     </div>
     </div>
    
    </>
   
  )
}
