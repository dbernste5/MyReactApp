import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Menu extends Component 
{
	
  	render()
 {

    return(
        <ul>
            <li> <Link to='/Home'>Home</Link> </li>
            <li> <Link to='/LoginPage'>Login</Link> </li>
            <li> <Link to='/SignUp'>SignUp</Link> </li>
        </ul>
    );
	
	}
	

}
export default Menu;