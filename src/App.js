import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const numbers = [1,2,3,4,5,6,7,8,9];
  const operations = ["+", "-", "*", "/"];

  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");

  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(result + firstNumber + secondNumber + currentOperation);
  }, [result, firstNumber, secondNumber]);

  const clickNumbers = (val) => {
    if (currentOperation == ""){
      setFirstNumber(firstNumber + val);
    } else{
      setSecondNumber(secondNumber + val);
    }
  };

  const clickOperation = (val) => {
    setCurrentOperation(val);
  };

  const clearAll = () => {
    setFirstNumber("");
    setSecondNumber("");
    setCurrentOperation("");
    setResult(0);
  };

  const performOperation = () => {
    switch (currentOperation) {
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber))
      break;

      case "-":
        setResult(Number(firstNumber) - Number(secondNumber))
      break;

      case "/":
        setResult(Number(firstNumber) / Number(secondNumber))
      break;

      case "*":
        setResult(Number(firstNumber) * Number(secondNumber))
      break;
    }
  };

  return (
    <div className="App">
      <h1>CALCULATOR</h1>
        <div className="display">
          {result}
        </div>
      <div className="calculator">
        <div className="leftSide">
          <div className="operationsTop">
          <div className="clearButton" onClick={clearAll}>AC</div>
          <div
          className="equalButton"
          onClick={performOperation}>=</div>
          </div>


            <div className="numbers">
              {numbers.map((val,key) => {
                return <div
                id="indivNumbers"
                onClick={()=> {
                  clickNumbers(val);
                }}>
                {" "}
                {val}</div>
              })}
            </div>
        </div>

        <div className="rightSide">
          <div className="operations">
            {operations.map((val,key) => {
              return <div
              id="indivOperators"
              onClick={()=> {
                clickOperation(val);
              }}>
              {" "}
              {val}</div>
            })}
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;