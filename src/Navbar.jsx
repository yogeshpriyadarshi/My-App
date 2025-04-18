import React from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
 import './Navbar.css'
// import './index.css'


export default function Navbar() {
  return (
  <header>  
<div id="navbar">
<Link to="/home">Logo</Link>
<Link to="/home">Home</Link>
<Link to="/activity">Activity</Link>
<Link to="/point">Point</Link>
<Link to="/analysis">Analysis</Link>
<button > login </button>
 <button>create free account</button>
</div>
</header>
  )
}
