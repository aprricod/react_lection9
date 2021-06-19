import "./App.css";
import { fetchData } from "./Api";
import React, { Suspense, lazy } from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// const ProfileDetails = lazy(() => import("./ProfileDetails"));
// const ProfilePosts = lazy(() => import("./ProfilePosts"));

export const resource = fetchData();
const Spinner = () => {
  <img
    src=""
    alt="loading..."
    loop="onfinite"
    style={{ width: "50px", margin: "auto", display: "block" }}
  />;
};

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Location = lazy(() => import("./Location"));
const NotFound = () => <h1>404 Страница не найдена</h1>;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/home" component={Home} exact></Route>
            <Route path="/about" component={About} exact></Route>
            <Route path="/about/location" component={Location}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/404" to="/notFound" strict />
            <Route component={() => <h1>Что-то пошло не так</h1>} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
