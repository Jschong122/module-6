import React from "react";
import { BigCats } from "../components/BigCats";

export function LabFive() {
  return (
    <div>
      <p>Lab 5</p>
      <BigCats showFormAndDelete={true} showResetButton={false} />
    </div>
  );
}
