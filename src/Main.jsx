import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';
import Logout from './Logout';

const Main=(props)=>(
   
 

   
   <main>
      <Switch>
        <Route path='/LoginPage'  
               render={() => <LoginPage logInUser={props.logInUser}/>} />
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/Home' component={Home}/>
        <Route path='/Logout' component={Logout}/>
      </Switch>
    </main>
   
)
  
  
  export default Main