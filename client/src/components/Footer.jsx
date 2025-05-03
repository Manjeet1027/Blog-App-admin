import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatIcon from '@mui/icons-material/Chat';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "rgb(212, 102, 11)", marginTop: "25px" }}>
        <Toolbar>
          <Box display={"flex"} marginLeft="auto">
            <Tooltip title="GitHub" arrow>
              <IconButton
                component="a"
                href="https://www.github.com/manjeet1027"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn" arrow>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/manjeet-karnwal-98658922a/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ marginLeft: "15px" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="LeetCode" arrow>
              <IconButton
                component="a"
                href="https://leetcode.com/u/manjeet1027/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ marginLeft: "15px" }}
              >
                <CodeIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Let's Chat - Project" arrow>
              <IconButton
                component="a"
                href="https://chat-app-kv75.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ marginLeft: "15px" }}
              >
                <ChatIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="goFood - Project" arrow>
              <IconButton
                component="a"
                href="https://gofood-foodapp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                sx={{ marginLeft: "15px" }}
              >
                <FastfoodIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
