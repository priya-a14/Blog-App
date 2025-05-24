import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const cat = queryParams.get("cat");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${location.search}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location.search]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home" style={{ padding: "20px" }}>
      {/* {cat && (
        <h2 style={{ marginBottom: "1rem", textTransform: "capitalize", color: "#333", fontWeight: "600" }}>
          Category: {cat}
        </h2>
      )} */}

      {posts.length === 0 ? (
        <div
          style={{
            maxWidth: "400px",
            margin: "60px auto",
            padding: "30px",
            borderRadius: "12px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
            color: "#555",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="none"
            stroke="#bbb"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-info"
            style={{ marginBottom: "16px" }}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12" y2="8" />
          </svg>
          <h3 style={{ marginBottom: "12px" }}>No posts to display</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
            There are no blog posts available in {cat} category at the moment.
            Please check back later or select another category.
          </p>
        </div>
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={`../upload/${post.img}`} alt={post.title} />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{getText(post.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
