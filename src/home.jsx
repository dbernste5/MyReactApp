import React, { Component, Fragment } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router';
import {Link }from 'react-router-dom';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state={ loggedIn: true}; 
        /*setting it to true so that we will be able to get to the componentDidMount to check if user is logged in
        this is not ideal since the home page ends up flashing if the user is not logged in- 
        before it realizes that it shud redirect, but we couldn't find another way that it would work since
        it was rendering before the fetch promise was resolved to a response so it was never able to set the state to true.
        this way it will always be true and we only set it to false once the response comes back*/
    }


    componentDidMount(){
        fetch("/validUser", {method: "POST"})
        .then((response)=>{
            if(response.status===200) {
                this.setState({loggedIn: true});                  
            }
            else {
                this.setState({loggedIn: false});
            }
        }); 
    }

    render() { 
        if(this.state.loggedIn) {
            //logged in, show home page
            return (
                <Fragment>
                    <h1>Welcome {Cookies.get('userName')}! </h1>
                    <ul>
                        <li><Link to='/addSticky' id='menu'>Add Sticky</Link></li> 
                        <li><Link to='/viewStickies' id='menu'>View Stickies Here</Link></li>
                    </ul>
                </Fragment>
                );
        }
        else {
            return <Redirect to='/LoginPage'/>;
        }         
    } 
}
export default Home;