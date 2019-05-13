import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';
import Logout from './Logout';
import addSticky from './addSticky';
import StickyView from './StickyView';

const Main=(props)=>(
   
 

   
   <main>
      <Switch>
        <Route path='/LoginPage'  
               render={() => <LoginPage logInUser={props.logInUser}/>} />
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/Home' component={Home}/>
        <Route path='/Logout' component={Logout}/>
        <Route path='/addSticky' component={addSticky}/>
        <Route path='/viewStickies' component={StickyView}/> 
        

      </Switch>
    </main>
   
)
  
  
  export default Main