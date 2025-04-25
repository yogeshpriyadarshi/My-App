import React from 'react'
import Navbar from './Navbar'
import style from './Calculator.module.css';
// import './Calculator.module.css'


export default function Calculator() {


  return ( 
    <>     
    <Navbar/> 
    <div> Calculator </div>
    <div id={style.id_a}> 
    <div>
        <button className={style.class_a}> 1 </button>
            <button className={style.class_a}> 2 </button>
        <button className={style.class_a}> 3 </button>
        <button className={style.class_a} > + </button>
    </div>
   
    <div>
        <button className={style.class_a}> 4 </button>
            <button className={style.class_a}> 5 </button>
        <button className={style.class_a}> 6 </button>
        <button className={style.class_a} > - </button>
    </div>
    <div>
        <button className={style.class_a}> 7 </button>
            <button className={style.class_a}> 8 </button>
        <button className={style.class_a}> 9 </button>
        <button className={style.class_a} > * </button>
    </div>
    <div>
        <button className={style.class_a}> 0 </button>
            <button className={style.class_a}> Back </button>
        <button className={style.class_a}> = </button>
        <button className={style.class_a} > - </button>
    </div>

    </div>
    
    </>    
  )
}
