import React, { useState } from "react";
import landingPageStyle from './landingPageStyle';
function App() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const onSubmit = () => {
    alert("Success!");
  };
  return (
    <div>
      <landingPageStyle>
        <input
          type="text"
          name={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        />

        <br />
        <input
          type="text"
          name={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Enter Room Code"
        />
        <br />
        <button type="submit" onClick={onSubmit}>Enter</button>
      </landingPageStyle>
    </div>
  );
}
export default App;
