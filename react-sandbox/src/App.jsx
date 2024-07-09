import { useState } from "react";
import "./App.css";
import { Greeting, GreetingsHoC } from "../src/components/Greeting";
import { LabTwo } from "../src/containers/LabTwo";
import { LabOne } from "../src/containers/LabOne";
import { LabThree } from "../src/containers/LabThree";
import { LabFour } from "./containers/LabFour";
import { LabFive } from "./containers/LabFive";
import { LabSix } from "./containers/LabSix";

// COMPONENT FUNCTION NAME -> INITIALISE
const App = () => {
  const [contentName, setContentName] = useState("");
  // STATES & VARIABLES
  const contentConfig = [
    { lab: "Lab 1" },
    { lab: "Lab 2" },
    { lab: "Lab 3" },
    { lab: "Lab 4" },
    { lab: "Lab 5" },
    { lab: "Lab 6" },
  ];
  // FUNCTIONS
  const displayHandler = () => {
    switch (contentName) {
      case contentConfig[0].lab:
        return <LabOne />;
      case contentConfig[1].lab:
        return <LabTwo />;
      case contentConfig[2].lab:
        return <LabThree />;
      case contentConfig[3].lab:
        return <LabFour />;
      case contentConfig[4].lab:
        return <LabFive />;
      case contentConfig[5].lab:
        return <LabSix />;
      default:
        return <div>Click on a Lab button to see the content</div>;
    }
  };
  const buttonConstructor = () => {
    const buttonElementArray = contentConfig.map((content) => {
      return (
        <button
          key={content.lab}
          onClick={() => setContentName(content.lab)}
          style={{ margin: "5px" }}
        >
          {content.lab}
        </button>
      );
    });
    return buttonElementArray;
  };
  //RETURN
  return (
    <div className="main-app-container">
      <p>
        This is the welcome page that will display the buttons for each lab{" "}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "5px",
        }}
      >
        {buttonConstructor()}
      </div>
      <div
        style={{
          display: "flex",
          width: "90vw",
          height: "70vh",
          border: "red 1px solid",
          overflow: "scroll",
        }}
      >
        {displayHandler()}
      </div>
    </div>
  );
};
export default App;
