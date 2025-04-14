import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [todo, settodo] = useState([]);
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  //let var const

  //state variable

  async function getTodo() {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    // console.log("response", response?.data);
    settodo(response?.data.slice(0,age));
  }

  useEffect(() => {
    console.log("UseEffect call");
    getTodo();
  }, [age]);
  useEffect(()=> {
    console.log("use it ")
  },[])

  return (
    <div>
      {/* <button onClick={getTodo}>Get Todo</button> */}
      {/* <p>{JSON.stringify(todo)}</p> */}
      <p>Input Value:{name}</p>

      <input
        onChange={(event) => {
          setname(event.target.value);
          console.log("input value", event.target.value);
        }}
      />

      <input
        onChange={(event) => {
          setage(event.target.value);
          console.log("input value", event.target.value);
        }}
      />

      {todo.map((item) => {
        return (
          <div>
            <p>title: {item?.title}</p>
          </div>
        );
      })}

      {todo?.length === 0 && (
        <>
          <p style={{ fontSize: "24", color: "red" }}>No Todo found</p>
        </>
      )}
    </div>
  );
}

export default Home;
