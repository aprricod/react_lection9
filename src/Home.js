import React from "react";
import { Link } from "react-router-dom";

export default function Home(state) {
  return (
    <div>
      <img
        style={{ maxWidth: "100%" }}
        src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png"
        alt="logo"
      />
      <h1>Домашняя страница</h1>
      <nav>
        <Link to="/about/1/Artem">1 Artem</Link>
        <br />
        <Link to="/about/2/Ivan">2 Ivan</Link>
        <br />
        <Link to="/about/3/Ivan/худой-60">3 Ivan худой</Link>
        <br />
        <Link
          to={{
            pathname: "/about/3/Ivan/худой-60",
            search: "?sort=name",
            hash: "#the-hash15",
            state: { fieldstate: "smth" },
          }}
          onClick={() => console.log(state)}
        >
          *3 Ivan худой*
        </Link>
        <br />
        <Link to="/location">Location</Link>
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
