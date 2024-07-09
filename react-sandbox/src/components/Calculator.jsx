import { useState } from "react";

export const Calculator = () => {
  const containerStyle = {
    borderRadius: "5px",
    maxHeight: "5vh",
  };

  const displayArea = {
    margin: "10px",
  };

  const displayInput = {
    margin: "10px",
    padding: "20px",
    color: "Green",
  };

  //store values
  const [number1, setNumber1] = useState(""); // To store the first number
  const [number2, setNumber2] = useState(""); // To store the second number
  const [operator, setOperator] = useState("+"); // To store the selected operator
  const [result, setResult] = useState(""); // To store the calculation result

  //event handler  ---- to update the value
  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };
  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };
  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const calculateResult = () => {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let res = "";
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "x":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        break;
    }

    setResult(res);
  };

  return (
    <div style={containerStyle}>
      <input
        type="number"
        value={number1}
        onChange={handleNumber1Change}
        placeholder="Number 1"
      />
      <select
        onChange={handleOperatorChange}
        style={{ margin: "10px", padding: "5px" }}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={number2}
        onChange={handleNumber2Change}
        placeholder="Number 2"
      />
      <button onClick={calculateResult} type="submit">
        Calculate
      </button>

      <div style={displayArea}>
        <div style={displayArea}>
          Number 1: <span style={displayInput}>{number1}</span> <br />
          Number 2: <span style={displayInput}>{number2}</span> <br />
          Result: <span style={displayInput}>{result}</span>
        </div>
      </div>
    </div>
  );
};
