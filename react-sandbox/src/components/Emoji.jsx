import { useState } from "react";

export const Emoji = () => {
  const [feeling, setFeeling] = useState(true);
  const happy = "😊😁😄😆";
  const sad = "😢😒😞";

  const toggleMood = () => {
    if (feeling === happy) {
      setFeeling(sad);
    } else {
      setFeeling(happy);
    }
  };

  return (
    <div>
      {" "}
      <p>Current mood: {feeling}</p>
      <button onClick={toggleMood}> Change Mood</button>
    </div>
  );
};
