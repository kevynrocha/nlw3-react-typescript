import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/orphanages" component={OrphanagesMap} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
