import React, { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../services/api";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TrendingPosts;
