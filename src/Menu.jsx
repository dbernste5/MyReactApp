import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                <li class='menu'> <Link to='/Home'>Home</Link> </li>
                <li class='menu'> <Link to='/Logout'>Logout</Link> </li>
                <li class='menu'> <Link to='/SignUp'>SignUp</Link> </li>
            </ul>
        );
    }
    else{ //not logged in
        return(
            <ul>
                <li class='menu'> <Link to='/Home'>Home</Link> </li>
                <li class='menu'> <Link to='/LoginPage'>Login</Link> </li>
                <li class='menu'> <Link to='/SignUp'>SignUp</Link> </li>
            </ul>
        );
        
        }
}
	

}
export default Menu;