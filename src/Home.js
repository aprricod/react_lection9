import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <img
        style={{ maxWidth: "100%" }}
        src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png"
        alt="logo"
      />
      <h1>Домашняя страница</h1>
      <nav>
        <Link to="/about/location">Location</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/home">Home</Link>
      </nav>
      <p>
        Это домашняя страница моего сайта. Тут можно найти основную информацию
      </p>
    </div>
  );
}
