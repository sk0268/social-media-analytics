import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const PostCard = ({ post }) => {
  return (
    <Card style={{ margin: "10px", padding: "10px" }}>
      <CardMedia component="img" height="200" image={post.imageUrl} alt="Post Image" />
      <CardContent>
        <Typography variant="h6">{post.username}</Typography>
        <Typography variant="body2">{post.content}</Typography>
        <Typography variant="body2">Comments: {post.commentCount}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
