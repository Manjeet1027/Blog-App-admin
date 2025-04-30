import Navbar from "./components/Navbar";
import { Routes, Route, Navigate} from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function App() {  
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");

  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={isLogin ? <Navigate to="/blogs" /> :<Navigate to="/login" /> } />
        <Route path="/blogs" element={isLogin ? <Blogs /> : <Navigate to="/login" />} />
        <Route path="/my-blogs" element={isLogin ? <UserBlogs />  : <Navigate to="/login" />} />
        <Route path="/blog-details/:id" element={isLogin ? <BlogDetails /> : <Navigate to="/login" />} />
        <Route path="/create-blog" element={isLogin ? <CreateBlog />: <Navigate to="/login" />} />
        <Route path="/login" element={!isLogin ? <Login />: <Navigate to="/" />} />
        <Route path="/register" element={!isLogin ?<Register />: <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </>
  );
}

export default App;