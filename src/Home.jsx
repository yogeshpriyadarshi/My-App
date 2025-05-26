import { useLocation, useNavigate } from "react-router-dom";
import { useEffect,useContext } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { AuthContext } from "./App";


function Home() {
  const { globalState, dispatch } = useContext(AuthContext);


  return (
    <>
      <Navbar />

      <div id="home_a">
        <div>   <h1> Welcome to home page: {globalState.name}  </h1>   </div>

        <div id="task-point">  

          <div id="minor-table">
  <h1>Point for minor tasks</h1>
          <table>
            
              <tr>
             <th>Duration</th>
             <th> Points</th>
              </tr>
           <tr>
            <td> +5 minutes </td>
            <td> 1 </td>
            </tr>
 <tr>
            <td> +10 minutes </td>
            <td> 2 </td>
            </tr>
             <tr>
            <td> +15 minutes </td>
            <td> 3 </td>
            </tr>
             <tr>
            <td> +20 minutes </td>
            <td> 4 </td>
            </tr>
            <tr>
            <td> +30 minutes </td>
            <td> 5 </td>
            </tr>

          </table>


          </div>


          <div id="major-table">   
  <h1>Point for major tasks</h1>
          <table>
            
              <tr>
             <th>Duration</th>
             <th> Points</th>
              </tr>
           <tr>
            <td> +45 minutes </td>
            <td> 7 </td>
            </tr>
 <tr>
            <td> +60 minutes </td>
            <td> 10 </td>
            </tr>
             <tr>
            <td> +90 minutes </td>
            <td> 15 </td>
            </tr>
             <tr>
            <td> +130 minutes </td>
            <td> 20 </td>
            </tr>
            <tr>
            <td> +180 minutes </td>
            <td> 25 </td>
            </tr>

          </table>


          </div>

        

            </div>
      
        
      </div>
    </>
  );
}

export default Home;
