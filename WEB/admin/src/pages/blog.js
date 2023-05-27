import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SideBar from "../components/sideBar";

import api from "../api";

const Blog = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const { data } = await api.get("blog/admin");
    setData(data.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="page blog">
      <SideBar />
      <div className="container">
        <h2>Blog posts</h2>
        <Link to="/blog/add" className="add-blog-post">
          + Add blog post
        </Link>
        <div className="posts">
          {data.map((item) => (
            <Link className="post card" to={"/blog/edit/" + item._id}>
              <img src={item.feature_image} />
              <section>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Author: {item.author}</p>
                <span>Status: {item.status}</span>
              </section>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
