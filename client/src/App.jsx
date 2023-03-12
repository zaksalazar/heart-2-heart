import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Homepage from "./components/homepage";
import Explainer from "./components/Explainer";
import Team from "./components/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <Homepage />
      </div>
      <div>
        <Explainer />
      </div>
      <div>
        <Team />
      </div>
    </div>
  );
}

export default App;
