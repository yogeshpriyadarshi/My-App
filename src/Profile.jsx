import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./App";
import axios from "axios";

import "./Profile.css";
export default function Profile() {
  const { globalState, dispatch } = useContext(AuthContext);
  const [userprofile, setUserprofile] = useState(globalState);

  const navigate = useNavigate();

  function changeHander(e, key) {
    let localuser = {...userprofile};
    localuser[key] = e.target.value;
    setUserprofile({ ...localuser });
  }

  function logout() {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/");
  }

 async function updateProfilefun() {
  console.log("updatprofile function calll")
     let res = await axios.post("http://localhost:5000/updateprofile",{...userprofile, dob: userprofile.dob.slice(0,10)});
    //  call the api  
    console.log("update upi call");
     console.log("data from backend",res.data); 
     
    if (res.data.success) {
      dispatch({type:"UPDATEPROFILE", user:res.data.user})
      alert("user profile is  updated successfully");
    }else{
      alert("user profile is not updated");
    }
   

  //   let payload={
  //     "name": "mk",
  //     "email": "m@k.com",
  //     "password": "mk",
  //     "mobile": "75465522",
  //     "dob": "2025-03-29",
  //     "gender": "Male",
  //     "country": "India",
  //     "city": "pune",
  //     "isLogin": true,
  //     "id": 9
  // }
  }

  return (
    <>
      <div id="profile_idb">
        <Link id="profile_ida" to="/home">
          DO IT
        </Link>
        Profile
        <button id="profile_ide" onClick={logout}>
          {" "}
          logout{" "}
        </button>
      </div>
      <div id="profile_idc">
        
          <label>Name:</label>
          <br />
          <input
            className="profile_classa"
            type="text"
            placeholder="Name"
            value={userprofile?.name}
            onChange={(e) => changeHander(e, "name")}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            className="profile_classa"
            type="text"
            placeholder="Email"
            value={userprofile.email}
            disabled
          />
          <br />
          <label>Password :</label>
          <br />
          <input
            className="profile_classa"
            type="password"
            placeholder="Password"
            value={userprofile.password}
            onChange={(e) => changeHander(e, "password")}
          />
          <br />
          <label>Contact:</label>
          <br />
          <input
            className="profile_classa"
            type="text"
            placeholder="Name"
            value={userprofile.mobile}
            onChange={(e) => changeHander(e, "mobile")}
          />
          <br />
          <label>Date of Birth:</label>
          <br />
          <input
            className="profile_classa"
            type="date"
            placeholder="Email"
            value={userprofile.dob?.slice(0,10)}
            onChange={(e) => changeHander(e, "dob")}
          />
          <br />
          <label> Gender: </label> <br />
          <select
            className="profile_classa"
            value={userprofile.gender}
            onChange={(e) => changeHander(e, "gender")}
          >
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
          <br />
          <label>Country :</label>
          <br />
          <input
            className="profile_classa"
            type="text"
            placeholder="Country"
            value={userprofile.country}
            onChange={(e) => changeHander(e, "country")}
          />
          <br />
          <label>City :</label>
          <br />
          <input
            className="profile_classa"
            type="text"
            placeholder="City"
            value={userprofile.city}
            onChange={(e)=>changeHander(e,"city")} 
          />
          <br />
          <button id="profile_idd" onClick={() => updateProfilefun()}>
            {" "}
            Save Change{" "}
          </button>
          <br />

      </div>
    </>
  );
}
