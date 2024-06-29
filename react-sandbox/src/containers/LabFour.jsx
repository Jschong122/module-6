import React from "react";
import { BigCats } from "../components/BigCats";

export const LabFour = () => {
  //function for reverse the list    ,  function for alphabetically sorting the list

  // display only cat family - ‘Panthera’

  //button

  const BtnStyle = {
    padding: "5px",
    margin: "20px",
    display: "flex",
    justifyContent: "space-evenly",
  };

  return (
    <div>
      <p> Lab 4</p>
      {/* <button style={BtnStyle}> Display only Panthera </button>
      <button style={BtnStyle}> Reverse List </button> */}
      <BigCats></BigCats>
    </div>
  );
};
