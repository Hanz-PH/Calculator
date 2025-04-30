import React, { useState } from "react";
import Calcu from "./Calcu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calcu />
    </div>
  )
}

export default App
