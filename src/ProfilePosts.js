import React from "react";
import { resource } from "./App";

const ProfilePosts = () => {
  const posts = resource.posts.read();
  return (
    <div>
      <h4>Посты</h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePosts;
