import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import {  Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);
  const base_url = process.env.REACT_APP_BASE_URL;


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${base_url}/api/user/auth-status`, {
          withCredentials: true,
        });
        if (res.data?.success) {
          setIsAuth(true);
          getAllBlogs(); 
        } else {
          setIsAuth(false);
          navigate("/login");
        }
      } catch (error) {
        console.log("Auth check failed", error);
        setIsAuth(false);
        navigate("/login");
      }
    };

    checkAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, base_url]);


  const getAllBlogs = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${base_url}/api/blog/all-blog`, {
        withCredentials: true,
      });
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ UI rendering
  if (isAuth === null || isLoading) return <Loader />;
  if (!isAuth) {
    navigate("/login");
  }



  return (
    <>
      {isLoading ? (
        <Grid container spacing={2}>
          <Loader />
        </Grid>
      ) : (
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
      )}
    </>
  );
};

export default Blogs;
