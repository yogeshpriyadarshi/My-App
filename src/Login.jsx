import { useEffect, useState, useContext,createContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { AuthContext } from "./App";

export default function Login() {
  const navigate = useNavigate();
  const {globalState, dispatch} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ClickHandler(e) {
e.preventDefault();
    const res = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });


    if (res.data.success) {
      setEmail("");
      setPassword("");
      dispatch({type:"LOGIN", user:res.data.user})
      navigate("/home");
    } else {
      alert(res.data.message);
    }
  }

  return (
    <>
      <div id="login_c">
        <div>
          <Link className="tab" to="/login">
            <button className="id_button"> login </button>
          </Link>
          <Link className="tab" to="/createAccount">
            <button className="id_button">create account</button>
          </Link>
        </div>
        <form onSubmit={(e) => ClickHandler(e)}>
        <div id="login_a">
          <h1>Login</h1> <br />
          <p className="Login_class"> Email </p>
          <input
            className="login_in"
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <p className="Login_class"> Password </p>
          <input
            className="login_in"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br /> <br />
          <br />
          <button id="login_b" type="submit" >
            {" "}
            Log in{" "}
          </button>
        
        </div>
        </form>
      </div>
    </>
  );
}
