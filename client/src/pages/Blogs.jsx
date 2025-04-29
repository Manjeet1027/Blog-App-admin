import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { Card, Grid, Skeleton } from "@mui/material";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URL;

  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");

  //get blogs
  const getAllBlogs = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${base_url}/api/blog/all-blog`, {
        withCredentials: true, // Important if using cookies
      });
      // console.log("Blogs Data : ", { data });
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      {isLoading ? (
        <Grid container spacing={2}>
          <Loader />
        </Grid>
      ) : isLogin ? (
        <Grid container spacing={2}>
          {blogs &&
            blogs.map((blog) => (
              <BlogCard
                key={blog?._id}
                id={blog?._id}
                isUser={
                  localStorage.getItem("userId") === blog?.user?._id ||
                  localStorage.getItem("userRole") === "admin"
                }
                title={blog?.title}
                content={blog?.content}
                image={blog?.image}
                username={blog?.user?.username}
                time={blog.createdAt}
              />
            ))}
        </Grid>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default Blogs;
