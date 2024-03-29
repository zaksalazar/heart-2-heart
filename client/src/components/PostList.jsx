import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Navbar";

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        setLoading(true);
        const res = await fetch("/api/supplies");
        const data = await res.json();
        setLoading(false);
        setPosts(data);
        console.log(data);
      }
      fetchData();
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading && "loading data..."}
      <div className="bg-[url('https://h-2-h.s3.us-west-2.amazonaws.com/fam1.webp')] bg-no-repeat bg-cover bg-[height:844px] bg-scroll">
        <div className="flex flex-col items-center">
          <div className="mt" role="img">
            <img
              className="max-w-[200px] md:w-auto mt-10"
              src="https://h-2-h.s3.us-west-2.amazonaws.com/logo1.png"
              alt="logo"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center mt-5">
              <p className="mb-4 text-4xl font-bold text-white">
                Families in Need
              </p>
              <p className="text-2xl font-light text-gray-100">Select one</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center">
                {posts.map((cardData) => {
                  return (
                    <Link key={cardData?._id} to={`/posts/${cardData?._id}`}>
                      <Card cardData={cardData} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPosts;
