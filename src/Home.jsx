import { useLocation, useNavigate } from "react-router-dom";
import { useEffect,useContext } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { AuthContext } from "./App";


function Home() {
  const { state, dispatch } = useContext(AuthContext);
  console.log("print state form home page:",state);


  return (
    <>
      <Navbar />

      <div id="home_a">
        {" "}
        <h1> Welcome to home page: {state.name}  </h1>{" "}
        
      </div>
    </>
  );
}

export default Home;
