import { useState } from "react";
import './bai1.css'

function bai2() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [sum, setSum] = useState(null);

  function handleCalculate() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    setSum(numA + numB);
  }

  return (
    <div className="container">
      <input type="number" placeholder="Nhập a" onChange={(e) => setA(e.target.value)}/>
      <input type="number" placeholder="Nhập b" onChange={(e) => setB(e.target.value)}/>
      <button onClick={handleCalculate}>Calculator</button>
      <br />
      <span>{sum}</span>
    </div>
  );
}

export default bai2;
