import { useState } from "react";
import "./App.css";
import { Greeting, GreetingsHoC } from "./components/Greeting";

import { LabTwo } from "./containers/LabTwo";
import { LabOne } from "./containers/LabOne";

// COMPONENT FUNCTION NAME -> INITIALISE
const App = () => {
  // STATES & VARIABLES
  const [contentName, setContentName] = useState(" ");

  const contentDictionary = {
    labOne: "Lab 1",
    labTwo: "Lab 2",
  };

  //FUNCTION
  const displayHandler = () => {
    // if (contentName === "") return <p> No content here </p>;

    // if (contentName === "Lab 1") return <LabOne />;
    // if (contentName === "Lab 2") return <div> Not ready yet </div>;

    switch (contentName) {
      case contentDictionary.labOne:
        return <LabOne />;
        break; //must put break when use switch. it doesn't know how to stop.
      case contentDictionary.labTwo:
        return <LabTwo />;
      default:
        return <div> Click on a Lab button to see the content </div>;
    }
  };

  //RETURN
  return (
    <div className="main-app-container">
      <h1>This is the welcome page</h1>

      <div style={{ display: "flex", justifyContent: " space-around" }}>
        <button onClick={() => setContentName(contentDictionary.labOne)}>
          Lab1
        </button>
        <button onClick={() => setContentName(contentDictionary.labTwo)}>
          Lab2
        </button>
      </div>

      <div style={{ display: "flex", width: "90vw", border: "red 1px solid" }}>
        {/* <p> {contentName}</p> */}
        {displayHandler()}
      </div>
    </div>
  );
};
export default App;
