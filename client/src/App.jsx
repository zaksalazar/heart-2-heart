import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Signup from "./components/Signup";
import Homepage from "./components/PageHomie";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostsList from "./components/PostList";
import Login from "./components/Login";
import SendDonation from "./components/SendDonation";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import Faq from "./components/Faq";
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/send" element={<SendDonation />} />
        <Route path="/about-us" element={<Team />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
