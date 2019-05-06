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
                <h1>Home page: </h1>
            </div>
             );
             //{Cookies.get('sessionId')} 
    }
    else{
        return <Redirect to='/LoginPage'/>;
    }
	
	
	}
	

}
export default Home;