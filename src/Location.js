import React from "react";
import { fetchData } from "./Api";
import { Link } from "react-router-dom";
export const resource = fetchData();

const Location = () => {
  const location = resource.user.read().address;
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        Home
      </nav>
      <h4>Местонахождение</h4>
      <ul>
        <li>
          Адрес:{" "}
          {location.city +
            ", " +
            location.street +
            " street, " +
            location.suite}
        </li>
        <li>Индекс: {location.zipcode}</li>
        <li>Широта: {location.geo.lat}</li>
        <li>Долгота: {location.geo.lng}</li>
      </ul>
    </div>
  );
};

export default Location;
