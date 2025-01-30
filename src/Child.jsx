import { useState } from "react";

function Child({ sendDataToParent }) {
  const [data, setData] = useState(0);
  

  const handleClick = () => {
    setData(data + 1);
    sendDataToParent(data + 1);
  }

  return (
    <div>
      {/* <input type="text" value={data} onChange={(e) => setData(e.target.value)} /> */}
      <h1> Child: {data}</h1>
      <button onClick={() => handleClick()}>Send Data to Parent</button>
    </div>
  );
}

export default Child;