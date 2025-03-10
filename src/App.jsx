import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
      setMessage("Please enter valid weight or height.");
      return;
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(2));
      // console.log(bmi.toFixed(2));
    }
    if (bmi < 25) {
      setMessage("You are under Weight");
    } else if (bmi >= 25 && bmi > 75) {
      setMessage("You are heavy Weight");
    }
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };
  return (
    <>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter weight in pounds"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height (in)</label>
            <input
              type="text"
              placeholder="Enter height in inches"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="submit" onClick={reset}>
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
    </>
  );
}

export default App;
