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
<Link className="tab" to="/point">Point</Link>
<Link className="tab" to="/analysis">Analysis</Link>
<Link className="tab" to="/user">User</Link>
<Link className="tab" to="/login"><button > login </button></Link>
<Link className="tab" to="/createAccount"><button>create free account</button></Link>

</div>
</header>
  )
}
