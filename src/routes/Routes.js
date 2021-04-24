import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";
import Dsh_Interview from "../pages/Dsh_Interview";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/Dashboard/Cronicles" exact component={Dashboard} />
        <Route path="/Dashboard/Foreing_trade" exact component={Dashboard} />
        <Route path="/Dashboard/Interview" exact component={Dsh_Interview} />
        <Route path="/Dashboard/Station" exact component={Dashboard} />
        <Route path="/Dashboard/About_us" exact component={Dashboard} />
        <Route path="/Dashboard/Media" exact component={Dashboard} />
        <Route path="/" exact component={Index} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
