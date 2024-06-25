import React from "react"; // Make sure React is imported if using JSX syntax
import { Greeting, GreetingsHoC } from "../components/Greeting";

export const LabOne = () => {
  const contentStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "5px",
  };

  return (
    <div style={{ margin: "5px" }}>
      <LabelAndContent labelText={"Lab 1 a & b"}>
        <div style={contentStyle}>
          <Greeting name={"Jess"} />
        </div>
      </LabelAndContent>

      <LabelAndContent labelText={"Lab 1 c"}>
        <div style={contentStyle}>
          <GreetingsHoC name={"Jess"}>
            <p>I want to welcome you to my website, blah blah</p>
          </GreetingsHoC>
        </div>
      </LabelAndContent>
    </div>
  );
};

const LabelAndContent = ({ labelText, children }) => {
  return (
    <div>
      <h6 style={{ paddingBottom: "10px", textAlign: "left" }}>{labelText}</h6>
      {children}
    </div>
  );
};
