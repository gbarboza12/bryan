import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Family from './Family';
import QA from './QA';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/family' component={Family}/>
      <Route path='/qa' component={QA}/>
    </Switch>
  </main>
)

export default Main;
