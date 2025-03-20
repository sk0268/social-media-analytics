import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card style={{ margin: "10px", padding: "10px", display: "flex", alignItems: "center" }}>
      <Avatar src={user.profilePic} alt={user.name} />
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2">Posts: {user.postCount}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
