import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(100)
  const [co, setCo] = useState(1)
  
  useEffect( ()=> { 
    // setCount(count-10)
    console.log("useEffect worked")},[count])
 function Test(){
console.log("test function call")

 }
 Test()
  return(
  
<div>
  <p>  The count is {count}.</p>
  <button onClick={()=> setCount(count -2)} > click here 
</button>
<button onClick={()=> setCo(co -2)} > click here 
</button>
<Home/>
</div>
  )
}

export default App
