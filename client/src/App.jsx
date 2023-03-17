import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import CreatePost from "./components/CreatePost";
import Post from "./components/PostList";
import PostsList from "./components/PostList";
import Navbar from "./components/Navbar";
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

    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span> Home </span>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <span> Sign up </span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span> Login </span>
            </Link>
          </li>
          <li>
            <Link to="/create-post">
              <span> Create Post </span>
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <span>Post List </span>
            </Link>
          </li>
          <li>
            <Link to="/posts/123">
              <span>Post Page </span>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </Router>

    <div className="App">
      {/* <div>
        <Navbar />
      </div> */}
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
    </div>

  );
}

export default App;
