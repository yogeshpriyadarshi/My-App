import React from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
 import './Navbar.css'
// import './index.css'


export default function Navbar() {
  return (
    <header>  
<div id="navbar">
<a href="">Logo</a>
<Link to="/home">Home</Link>
<Link to="/activity">Activity</Link>
<a href="">Point</a>
<a href="">Analysis</a>
<button > login </button>

<a href="">
  <button>create free account</button>
</a>
</div>
</header>
  )
}
