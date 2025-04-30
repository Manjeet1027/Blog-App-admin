import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const base_url = process.env.REACT_APP_BASE_URL;

const DEFAULT_IMAGE =
  "data:image/jpeg;base64,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";

export default function BlogCard({
  title,
  content,
  image,
  username,
  time,
  id,
  isUser,
}) {
  const navigate = useNavigate();

  const [imgSrc, setImgSrc] = React.useState(image || DEFAULT_IMAGE);

  const handleEdit = () => {
    navigate(`/blog-details/${id}`);
  };

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`${base_url}/api/blog/delete-blog/${id}`, {
        withCredentials: true, // Important if using cookies
      });
      if (data?.success) {
        alert("Blog Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card
      sx={{
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {isUser && (
        <Box display={"flex"}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <ModeEditIcon color="info" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      )}
      <CardHeader
        title={username}
        subheader={new Date(time).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      />
      <CardMedia
        component="img"
        height="300"
        image={imgSrc}
        alt="Image"
        onError={() => setImgSrc(DEFAULT_IMAGE)}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
