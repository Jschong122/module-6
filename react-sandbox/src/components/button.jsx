import { useState } from "react";

export const Button = () => {
  //states & variables
  const [count, setCount] = useState(0);

  //functions
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  //return
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};
