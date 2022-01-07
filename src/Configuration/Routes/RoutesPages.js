import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from "./Routes";
import HomePage from "../../Pages/Home/HomePage";

const RoutesPages = () => {
return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME} component={ HomePage } />
        </Switch>
    </Router>
  );
};

export default RoutesPages;
