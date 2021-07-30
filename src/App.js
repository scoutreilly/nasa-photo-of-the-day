import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

import SpaceCard from "./Functions/SpaceCard";

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
//
//

function App() {
  const [spaceData, setSpaceData] = useState("");
  const myApiKey = "re1NUI5ffyac6vMsiCG8lSuLGFkwImxhJYwm4dN5";

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${myApiKey}`)
      .then((response) => setSpaceData(response.data));
  }, []);
  //&start_date=1998-05-24&end_date=1998-05-26
  console.log(spaceData);
  // console.log(Array.isArray(spaceData));
  // let newSpace = Object.entries(spaceData);
  // console.log(newSpace);
  // newSpace.forEach((i) => {
  //   console.log(i);
  // });

  return (
    <div className="App">
      <p>Welcome to the beauty of space</p>
      {/* possibly map or forEach here */}
      <SpaceCard
        title={spaceData.title}
        date={spaceData.date}
        description={spaceData.explanation}
        imgUrl={spaceData.url}
        copyright={spaceData.copyright}
      />
    </div>
  );
}

export default App;
