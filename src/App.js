import { useState } from "react";

function App() {
  const [a, seta] = useState(2)
  return (
    <div className="app">
      <h1>{a}</h1>
      <button onClick={() => seta((t)=>t+t)}>Add</button>
    </div>
  );
}

export default App;
