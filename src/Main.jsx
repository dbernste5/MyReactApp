import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';

const Main = ()=> (
   
   
   <main>
      <Switch>
        <Route path='/LoginPage' component={LoginPage}/>
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/Home' component={Home}/>
      </Switch>
    </main>
)
  
  
  export default Main