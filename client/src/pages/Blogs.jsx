import React, { useEffect, useState} from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import {  Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URL;


  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");


  const getAllBlogs = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${base_url}/api/blog/all-blog`);
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ UI rendering
  if (isLogin === null || isLoading) return <Loader />;
  if (!isLogin) {
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
