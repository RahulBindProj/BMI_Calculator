import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();

    // Convert input values to numbers and handle edge cases
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (
      isNaN(weightNum) ||
      weightNum <= 0 ||
      isNaN(heightNum) ||
      heightNum <= 0
    ) {
      setMessage("Please enter valid weight and height.");
      setBmi(null);
      return;
    }

    // Calculate BMI using the formula (weight in lbs) / (height in inches ^ 2) * 703
    const calculatedBmi = (weightNum / (heightNum * heightNum)) * 703;
    setBmi(calculatedBmi.toFixed(2));

    // BMI classification logic
    if (calculatedBmi < 18.5) {
      setMessage("You are underweight.");
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setMessage("You have a normal weight.");
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setMessage("You are overweight.");
    } else {
      setMessage("You are obese.");
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight (lbs)</label>
          <input
            type="number"
            placeholder="Enter weight in pounds"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (inches)</label>
          <input
            type="number"
            placeholder="Enter height in inches"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Calculate</button>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </form>
      <div>
        {bmi && (
          <>
            <p className="bmi_val">Your BMI: {bmi}</p>
            <p className="message">{message}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
