import Activity from './Activity'
import Home from './Home'
import { Link } from 'react-router-dom'

import Navbar from './Navbar.jsx'

function App() {
 
  return(
<div>
  
  
  <h1> do only login and create free account!</h1>
  <Link className="tab" to="/login"><button className="id_button" > login </button></Link>
<Link className="tab" to="/createAccount"><button className="id_button">create account</button></Link>


</div>
  )
}

export default App
