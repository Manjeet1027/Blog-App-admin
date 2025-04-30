import Navbar from "./components/Navbar";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

function App() {  
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await axios.get(`${base_url}/api/user/auth-status`, {
          withCredentials: true,
        });
      //   if (res.data?.success) {
      //     setIsAuth(true);
      //   } else {
      //     setIsAuth(false);
      //     navigate("/login");
      //   }
      // } catch (error) {
      //   console.log("Auth check failed", error);
      //   setIsAuth(false);
      //   navigate("/login");
      // }
      setIsAuth(true);
    } catch (err) {
      setIsAuth(false);
      navigate("/login");
    }
    };

    checkAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, base_url]);

  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={isAuth ? <Blogs /> :<Navigate to="/login" /> } />
        <Route path="/blogs" element={isAuth ? <Blogs /> : <Navigate to="/login" />} />
        <Route path="/my-blogs" element={isAuth ? <UserBlogs />  : <Navigate to="/login" />} />
        <Route path="/blog-details/:id" element={isAuth ? <BlogDetails /> : <Navigate to="/login" />} />
        <Route path="/create-blog" element={isAuth ? <CreateBlog />: <Navigate to="/login" />} />
        <Route path="/login" element={!isAuth ? <Login />: <Navigate to="/" />} />
        <Route path="/register" element={! isAuth ?<Register />: <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </>
  );
}

export default App;