import React from "react";
import { Link } from "react-router-dom";

const About = (props, state) => {
  const { id, name, category, weight } = props.match.params;

  const queryParam = new URLSearchParams(props.location.search);
  console.log(queryParam.get("sort"));
  console.log(state);
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <h1>About Me</h1>
      <p>
        Hi my name is <strong>Leanne Graham</strong> a.k.a Bret
      </p>
      <p>I'm working for "Romaguera-Crona" as engineer</p>
      <p>
        Please visit my site <a href="http://hildegard.org">hildegard.org</a>
      </p>
      <p>Don't hesitate to write me any questions on sincere@april.biz</p>
      <p>
        Идентификатор: {id} Имя: {name} Категория: {category} ({weight})
      </p>
    </div>
  );
};
export default About;
