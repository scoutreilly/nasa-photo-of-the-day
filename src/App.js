import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
//
//

function App() {
  const [spaceData, setSpaceData] = useState('');
  const myApiKey = 're1NUI5ffyac6vMsiCG8lSuLGFkwImxhJYwm4dN5';

  useEffect(() => {
    axios 
    .get(`https://api.nasa.gov/planetary/apod?api_key=${myApiKey}`)
    .then(response => setSpaceData(response.data))
  }, [])


  console.log(spaceData);







  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
