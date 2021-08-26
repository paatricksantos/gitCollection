import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import IssuesProvider from '../contexts/IssuesContext';

const Dashboard = lazy(
  () => import(/* webpackPrefetch: true */ '../pages/Dashboard'),
);
const Repo = lazy(() => import(/* webpackPrefetch: true */ '../pages/Repo'));

const Routes: React.FC = () => {
  return (
    <Switch>
      <Suspense fallback="Carregando">
        <Route exact path="/" component={Dashboard} />
        <IssuesProvider>
          <Route path="/repos/:repository+" component={Repo} />
        </IssuesProvider>
      </Suspense>
    </Switch>
  );
};

export default Routes;
