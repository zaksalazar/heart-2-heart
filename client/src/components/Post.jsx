import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardSingle from "./CardSingle";
import Navbar from "./Navbar";

const Post = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    try {
      async function fetchData() {
        setLoading(true);
        const res = await fetch(`/api/supplies/${postId}`);
        const data = await res.json();
        setLoading(false);
        setPost(data);
        console.log(data);
      }
      fetchData();
    } catch (e) {
      console.log(e, "this is the error");
    }
  }, []);

  return (
    <div>
      {loading && "loading..."}
      <CardSingle cardData={post} />
    </div>
  );
};

export default Post;
