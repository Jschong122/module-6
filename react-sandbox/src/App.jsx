import { useState } from "react";
import "./App.css";
import { Greeting, GreetingsHoC } from "./components/Greeting";
import { CatsList } from "./components/BigCats";

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

      <CatsList>
        <h1>Cat Breeds</h1>
      </CatsList>
    </>
  );
};
export default App;
