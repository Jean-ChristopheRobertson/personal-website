import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import AboutUs from "./Containers/AboutUs/AboutUs";
import ErrorPage from "./Containers/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/" component={AboutUs} exact />
        <Route path="/" component={ErrorPage} exact />
      </Switch>
    </div>
  );
}

export default App;
