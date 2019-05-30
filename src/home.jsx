import React, { Component, Fragment } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router';
import {Link }from 'react-router-dom';

class Home extends Component {
	
    render() {

        //change this to call to Spring to verify that the user is logged in 
        //by checking the cooking against the sessions hashmap
        if(Cookies.get('sessionId')!=null) {
            return (

                <Fragment>
                    <h1>Home page: {Cookies.get('userName')} </h1>
                    <ul>
                        <li><Link to='/addSticky' id='menu'>Add Sticky</Link></li> 
                        <li><Link to='/viewStickies' id='menu'>View Stickies Here</Link></li>
                    </ul>
                </Fragment>
                );
                
        }
        else{
            return <Redirect to='/LoginPage'/>;
        }
        
        
    }
    
}
export default Home;