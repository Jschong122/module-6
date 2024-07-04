import React from "react";
import { BigCats } from "../components/BigCats";

export function LabFour() {
  return (
    <div>
      <p>Lab 4</p>
      <BigCats showFormAndDelete={false} showResetButton={true} />
    </div>
  );
}
