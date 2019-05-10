import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class Menu extends Component 
{
    constructor(props)
    {
        super(props);
    }
    
    
	
render()
 {

    if(this.props.loggedIn) //user is logged in
    {
        return(
            <ul>
                <li> <Link to='/Home'>Home</Link> </li>
                <li> <Link to='/Logout'>Logout</Link> </li>
                <li> <Link to='/SignUp'>SignUp</Link> </li>
            </ul>
        );
    }
    else{ //not logged in
        return(
            <ul>
                <li> <Link to='/Home'>Home</Link> </li>
                <li> <Link to='/LoginPage'>Login</Link> </li>
                <li> <Link to='/SignUp'>SignUp</Link> </li>
            </ul>
        );
        
        }
}
	

}
export default Menu;