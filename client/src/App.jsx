import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Homepage from "./components/homepage";
import Explainer from "./components/Explainer";
import Team from "./components/Team";
import Card from "./components/Card";
import Helper from "./components/Helper";
import NewPost from "./components/NewPost";
import Drop from "./components/Drop";
import ViewPosts from "./components/ViewPosts";
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
<<<<<<< HEAD
  <Router> 
    <Routes>
      <Route
        path = "/"
        element= {<Homepage/>}
      />
      <Route 
        path = "/signup"
        element = {<Signup/>}
      />
      <Route 
        path = "/post"
        element = {<Card/>}
      />
      <Route 
        path="/post/:postId" 
        element={<Card />}
      />
      <Route 
        path="/aboutus"
        element={<Team />}
      />
    </Routes>
  </Router>
      
      // <div>
      //   <Homepage />
      // </div>
      // <div>
      //   <Explainer />
      // </div>
      // <div>{/* <Dashboard /> */}</div>
=======

      {/* <div>
        <Homepage />
      </div> */}

      {/* New Family creating a post */}

      {/* <div>
        <Helper />
      </div> */}
>>>>>>> bcc93a2 (added a bunch)

<<<<<<< HEAD
      // <div>
      //   <Card />
      // </div>
=======
      {/* <div>
        <NewPost />
      </div> */}

      {/* <div>
        <Drop />
      </div> */}

      <div>
        <ViewPosts />
      </div>

      {/* <div>
        <Card />
      </div> */}
>>>>>>> 1b3799a (added explainer to homepage)

<<<<<<< HEAD
      // {/* <div className=" p-20 ">
      //   {cards.map((card) => {
      //     return (
      //       <div key={card.id}>
      //         <Card data={card} />
      //       </div>
      //     );
      //   })}
      // </div> */}

    {/* //   <div className="pt-10">
    //     <Team />
    //   </div> */}
    // </div>
=======
      <div>{/* <Homepage /> */}</div>
      <div>{/* <Explainer /> */}</div>
      <div>{/* <Dashboard /> */}</div>

      <div>{/* <Card /> */}</div>

      {/* <div className=" p-20 ">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <Card data={card} />
            </div>
          );
        })}
      </div> */}

      {/* <div className="pt-10">
        <Team />
        </div> */}
    </div>
>>>>>>> bcc93a2 (added a bunch)
  );
}

export default App;
