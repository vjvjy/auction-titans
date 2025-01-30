import React, { useState, useEffect } from "react";
import Child from "./Child";
import axios from 'axios'
import api from "./api";

function Parent() {
  const [dataFromChild, setDataFromChild] = useState(0);
  const [todos, setTodos] = useState([]);
  let [responseData, setResponseData] = React.useState('')

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }
// ykG2I7wNnjCsSIFxawPIMl7W1G0YPlyWYZyC5YTit6U4R3DrZnPuYF2nyIFD - api token
  useEffect(() => {
    api.getJokes()
      .then((response)=>{
         setResponseData(response.data)
         console.log(response)
      })
      .catch((error) => {
         console.log(error)
      })
  }, [])

  return (
    <div>
      {/* <h1>Parent: {dataFromChild}</h1> */}
      {/* <Child sendDataToParent={handleDataFromChild} /> */}
      {/* {todos.map((todo) => {
        if(todo.id < 11) {
        return (
        <ul>
          <li>{todo.title}</li>
        </ul>
        )
      }
      })} */}
      <h2>Movie</h2>
    </div>
  );
}

export default Parent;