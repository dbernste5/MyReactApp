import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';
import AddSticky from './addSticky';
import StickyView from './StickyView';
import SignUpSuccess from './SignUpSuccess';

const Main=(props)=>(

  <main>
    <Switch>
      <Route path='/LoginPage'  
        render={() => <LoginPage  logInUser={props.logInUser}
                                  logoutUser={props.logoutUser}
                                  loggedIn= {props.loggedIn} />} />
      <Route path='/addSticky' component={AddSticky}/>
      <Route path='/SignUp' component={SignUp}/>
      <Route path='/Home' component={Home}/>
      <Route path='/viewStickies' component={StickyView}/>
      <Route path='/SignUpSuccess' component={SignUpSuccess}/> 
    </Switch>
  </main>
) 
export default Main