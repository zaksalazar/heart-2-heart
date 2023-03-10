import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
}

export default App;
