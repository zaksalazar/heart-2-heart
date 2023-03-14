import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Homepage from "./components/homepage";
import Explainer from "./components/Explainer";
import Team from "./components/Team";
import Card from "./components/Card";
// import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  // const cards = [
  //   {
  //     id: "card-1",
  //     name: "Owens Family",
  //     bio: "we Lost our jobs and we need help",
  //     buttonText1: "Clothing",
  //     buttonText2: "School Supplies",
  //   },
  // ];

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
      <div>{/* <Dashboard /> */}</div>

      <div>
        <Card />
      </div>

      {/* <div className=" p-20 ">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <Card data={card} />
            </div>
          );
        })}
      </div> */}

      <div className="pt-10">
        <Team />
      </div>
    </div>
  );
}

export default App;
