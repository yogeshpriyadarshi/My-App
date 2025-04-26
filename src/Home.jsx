import { useLocation, useNavigate} from "react-router-dom";
import { useEffect,useContext } from "react";
import Navbar from "./Navbar";
import './Home.css'
import { AuthContext } from "./App";

function Home() {
  const navigate = useNavigate();
  const {state,dispatch} = useContext(AuthContext)

console.log(name);


function logout(){
  dispatch({type:"LOGOUT"})
  navigate('/')
    
}
  // const { name } = location.state || {};

// App.jsx or Homepage.jsx



  return( 
    <>
<Navbar/>

<div id="home_a"> <h1>  Welcome to home page Name: {state?.name} </h1>  </div>
<button onClick={ logout } >  logout  </button>




</>
)
}

export default Home;