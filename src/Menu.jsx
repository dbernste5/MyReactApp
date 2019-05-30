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
                <li class='menu'> <Link to='/Home'>Home</Link> </li>
                <li class='menu'> <Link to='/LoginPage'>{label}</Link> </li>
                <li class='menu'> <Link to='/SignUp'>SignUp</Link> </li>
            </ul>
        );
    };

export default Menu;