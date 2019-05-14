import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';
import Logout from './Logout';
import AddSticky from './addSticky';
import StickyView from './StickyView';

const Main=(props)=>(
   
 
//render={() => <addSticky userID={props.userID}/>}
//<Route path='/addSticky' component={addSticky}/>
  
/*
<Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/>
*/ 
   <main>
      <Switch>
        <Route path='/LoginPage'  
               render={() => <LoginPage logInUser={props.logInUser} setUserID = {props.setUserID}/>} />
        <Route path='/addSticky'
               render={() => <AddSticky userID={props.userID}/>}/>
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/Home' component={Home}/>
        <Route path='/Logout' component={Logout}/>
        <Route path='/viewStickies' component={StickyView}/> 
        

      </Switch>
    </main>
   
)
  
  
  export default Main