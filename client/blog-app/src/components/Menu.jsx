import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {loading ? (
        <p className="menu-loading">Loading...</p>
      ) : posts.length === 0 ? (
        <div className="menu-empty">
          <img src="/no-content.svg" alt="No posts" />
          <p> 😕 There’s nothing to show for this category yet.</p>
        </div>
      ) : (
        posts.map((post) => (
          <Link to={`/post/${post.id}`} className="post" key={post.id}>
            <img src={`../upload/${post?.img}`} alt={post.title} />
            <h2>{post.title}</h2>
          </Link>
        ))
      )}
    </div>
  );
};

export default Menu;
