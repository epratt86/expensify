import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import EditPage from '../components/EditPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFoundPage';
import AddExpensePage from '../components/AddExpensePage';





const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;