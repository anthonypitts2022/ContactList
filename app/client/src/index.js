import React from 'react';
import ReactDOM from 'react-dom';
import ContactsPage from './pages/ContactsPage';
import Page404 from './pages/Page404';
import * as serviceWorker from './config/serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ContactsPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
