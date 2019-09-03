import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from '../components/dashboard'
import Students from '../components/students'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/students" component={Students} />
    </Switch>
  </BrowserRouter>
);

export default Routes;