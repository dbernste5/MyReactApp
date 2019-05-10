import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router';

class Home extends Component 
{
	
render()
 {

    if(Cookies.get('sessionId')!=null)
    {
        return (

			<div>
                <h1>Home page: {Cookies.get('userName')} </h1>
            </div>
             );
            
    }
    else{
        return <Redirect to='/LoginPage'/>;
    }
	
	
	}
	

}
export default Home;