import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";
import NewNews from "../pages/newNews";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/Dashboard/Nueva_Nota" exact component={NewNews} />
        <Route path="/" exact component={Index} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
