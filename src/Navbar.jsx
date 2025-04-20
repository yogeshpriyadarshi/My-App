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
<Link to="/home">Home</Link>
<Link to="/activity">Activity</Link>
<Link to="/point">Point</Link>
<Link to="/analysis">Analysis</Link>
<Link to="/user">User</Link>
<Link to="/login"><button > login </button></Link>
<Link to="/createAccount"><button>create free account</button></Link>

</div>
</header>
  )
}
