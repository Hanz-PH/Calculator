import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const num1 = Number(number1);
    const num2 = Number(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(num1 + num2);
        break;
      case "subtract":
        setResult(num1 - num2);
        break;
      case "multiply":
        setResult(num1 * num2);
        break;
      case "divide":
        setResult(num2 !== 0 ? num1 / num2 : "Result is undefined");
        break;
      case "modulo":
        setResult(num2 !== 0 ? num1 % num2 : "Result is undefined");
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-br from-pink-200 to-blue-100 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-purple-700 drop-shadow">LIM Calculator</h2>

      <div className="flex flex-col gap-4 mb-6">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Enter first number"
          className="bg-white/70 border-2 border-purple-300 rounded-xl px-4 py-2 text-center font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Enter second number"
          className="bg-white/70 border-2 border-blue-300 rounded-xl px-4 py-2 text-center font-semibold shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <button
          onClick={() => handleCalculation("add")}
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-black py-2 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          ➕ Add
        </button>
        <button
          onClick={() => handleCalculation("subtract")}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          ➖ Subtract
        </button>
        <button
          onClick={() => handleCalculation("multiply")}
          className="bg-gradient-to-r from-green-400 to-green-600 text-black py-2 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          ✖ Multiply
        </button>
        <button
          onClick={() => handleCalculation("divide")}
          className="bg-gradient-to-r from-blue-400 to-blue-600 text-black py-2 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          ➗ Divide
        </button>
        <button
          onClick={() => handleCalculation("modulo")}
          className="bg-gradient-to-r from-purple-400 to-purple-600 text-black py-2 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          % Modulo
        </button>
      </div>

      <div className="text-xl font-bold text-center text-indigo-700">
        Result:{" "}
        <span className="inline-block bg-white px-4 py-2 rounded-xl shadow-inner">
          {result !== null ? result : "—"}
        </span>
      </div>
    </div>
  );
}

export default Calculator;
