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
import {  useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/store";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path
  //state
  const [value, setValue] = useState();

  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");


  // Set the active tab based on the current location
  useEffect(() => {
    if (location.pathname === "/blogs") {
      setValue(0);
    } else if (location.pathname === "/create-blog") {
      setValue(1);
    }
  }, [location]);

    //logout
    const handleLogout = () => {
      try {
        dispatch(authActions.logout());
        toast.success("Logout Successfully");
        localStorage.clear();
        navigate("login");
        // window.location.reload();
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
          {isLogin && (
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
            {!isLogin && (
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
            {isLogin && (
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