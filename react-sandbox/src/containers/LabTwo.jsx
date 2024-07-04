import React from "react";
import { BigCats } from "../components/BigCats";

export function LabTwo() {
  return (
    <div>
      <p>Lab 2</p>
      <BigCats showFormAndDelete={false} showResetButton={true} />
    </div>
  );
}
