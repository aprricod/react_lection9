import React from "react";
import { resource } from "./App";

const ProfileDetails = () => {
  const user = resource.user.read();
  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        <li>Имя: {user.username}</li>
        <li>Почта: {user.email}</li>
        <li>Телефон: {user.phone}</li>
      </ul>
    </div>
  );
};

export default ProfileDetails;
