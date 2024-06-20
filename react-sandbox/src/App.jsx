import { useState } from "react";
import "./App.css";
import { Greeting, GreetingsHoC } from "./components/Greeting";

// COMPONENT FUNCTION NAME -> INITIALISE
const App = () => {
  // STATES & VARIABLES

  //FUNCTION

  //RETURN
  return (
    <>
      <GreetingsHoC name={"Jess"}>
        <p>I want to welcome you to my website</p>
      </GreetingsHoC>
    </>
  );
};
export default App;
