import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");
  console.log(name);

  return (
    <>
      <Navbar />

      <div id="home_a">
        {" "}
        <h1> Welcome to home page Name: {name} </h1>{" "}
      </div>
    </>
  );
}

export default Home;
