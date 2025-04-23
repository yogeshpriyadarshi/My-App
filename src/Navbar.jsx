import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
  <header>  
<div id="navbar">
<Link to="/home">
 <>   <img src="src\assets\react.svg" alt="logo" /> </>  
 </Link>
<Link className="tab" to="/home">Home</Link>
<Link className="tab" to="/activity">Activity</Link>
<Link className="tab" to="/game">Game</Link>
<Link className="tab" to="/analysis">Analysis</Link>
<Link className="tab" to="/login"><button className="id_button" > login </button></Link>
<Link className="tab" to="/createAccount"><button className="id_button">create account</button></Link>

</div>
</header>
  )
}
