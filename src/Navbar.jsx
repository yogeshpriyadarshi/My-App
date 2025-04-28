import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

import './Navbar.css'


export default function Navbar() {
  const navigate = useNavigate();
  function logout( ) {
    localStorage.clear();
    navigate("/login");
  }
  return (
  <header>  
<div id="navbar">
<Link to="/"> <img src="src\assets\react.svg" alt="logo" />  </Link>
<Link className="tab" to="/home">Home</Link>
<Link className="tab" to="/to_do_list">To Do List</Link>
<Link className="tab" to="/game">Game</Link>
<Link className="tab" to="/analysis">Analysis</Link>
<Link className="tab" to="/calculator">Calculator</Link>
<button id="buttion_a" onClick={ logout } >  logout  </button>


{/* <Link className="tab" to="/login"><button className="id_button" > login </button></Link> */}
{/* <Link className="tab" to="/createAccount"><button className="id_button">create account</button></Link> */}

</div>
</header>
  )
}
