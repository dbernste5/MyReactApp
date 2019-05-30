import React from 'react';
import { Link } from 'react-router-dom';


const Menu = (props) => {
        
        var label;
        if (props.loggedIn) {
            //user is logged in, show link to logout
            label = 'Logout';
        } else { 
            //not logged in, show link to login
            label = 'Login';
        }

        return(
            <ul>
                <li> <Link to='/Home'id='menu'>Home</Link> </li>
                <li> <Link to='/LoginPage' id='menu'>{label}</Link> </li>
                <li> <Link to='/SignUp'  id='menu'>SignUp</Link> </li>
            </ul>
        );
    };

export default Menu;