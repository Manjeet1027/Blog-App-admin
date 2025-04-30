import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";
import axios from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  //state
  const [value, setValue] = useState();

  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${base_url}/api/user/auth-status`, {
          withCredentials: true,
        });
        if (res.data?.success) {
          setIsAuth(true);
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

  // Set the active tab based on the current location
  useEffect(() => {
    if (location.pathname === "/blogs") {
      setValue(0);
    } else if (location.pathname === "/create-blog") {
      setValue(1);
    }
  }, [location]);

  //logout
  const handleLogout = async () => {
    try {
      await axios.get(`${base_url}/api/user/logout`, {
        withCredentials: true, // Important if using cookies
      });
  
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      localStorage.clear(); // Optional
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };
  
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
        <Typography 
          variant="h4" 
          onClick={() => navigate("/blogs")} 
          style={{ cursor: "pointer" }}
        >Blog It</Typography>
          {isAuth && (
            <Box display={"flex"} 
            justifyContent="flex-start" marginLeft={3}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                <Tab
                  label="Create Blog"
                  LinkComponent={Link}
                  to="/create-blog"
                />
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isAuth && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
            {isAuth && (
              <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;