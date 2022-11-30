import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from "history";
import { Router, Route, Switch} from "react-router";
import Navbar from './components/Navbar/navbar.js';

//import components
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.js";
import SignUpPage from './views/SignUpPage/SignUpPage.js';
import SignInPage from './views/SignInPage/SignInPage';
import CoachPage from './views/CoachPage/CoachPage.js'


var hist = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={AboutUsPage} />
      <Route path="/sign-up" component={SignUpPage}/>
      <Route path='/sign-in' component={SignInPage}/>
      <Route path='/coach-page' component={CoachPage}/>
      <Route path="/" component={SignInPage} />
    </Switch>
  </Router>,
);