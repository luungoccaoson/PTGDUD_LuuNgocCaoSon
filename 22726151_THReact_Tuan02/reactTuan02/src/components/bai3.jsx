import { useState } from "react";
import './bai1.css'

function bai3() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState(null);
  
    function handleCalculate() {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
  
      let calcResult;
      switch (operation) {
        case "+":
          calcResult = numA + numB;
          break;
        case "-":
          calcResult = numA - numB;
          break;
        case "*":
          calcResult = numA * numB;
          break;
        case "/":
          calcResult = numB !== 0 ? numA / numB : "Không thể chia cho 0!";
          break;
        default:
          calcResult = "Lỗi!";
      }
  
      setResult(calcResult);
    }
  
    return (
      <div className="calculator-container">
        <input type="number" placeholder="Nhập a" onChange={(e) => setA(e.target.value)}/>
        <input type="number" placeholder="Nhập b" onChange={(e) => setB(e.target.value)}/>

        <div className="radio-group">
            <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="+" /> <span>+</span>
            <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="-" /> <span>-</span>
            <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="*" /> <span>*</span>
            <input onChange={(e) => setOperation(e.target.value)} type="radio" name="group" value="/" /> <span>/</span>
        </div>
  
        <button onClick={handleCalculate}>Calculator</button>
        <br />
        <span>{result}</span>
      </div>
    );
}

export default bai3;
