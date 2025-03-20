import React, { useEffect, useState } from "react";
import { fetchLiveFeed } from "../services/api";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchLiveFeed().then(setPosts);
    }, 3000); // Fetch new posts every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
