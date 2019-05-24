import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Menu = (props) => {
        //user is logged in
        if (props.loggedIn) {
            return(
                <ul>
                    <li class='menu'> <Link to='/Home'>Home</Link> </li>
                    <li class='menu'> <Link to='/Logout'>Logout</Link> </li>
                    <li class='menu'> <Link to='/SignUp'>SignUp</Link> </li>
                </ul>
            );
        } else { //not logged in
            return(
                <ul>
                    <li class='menu'> <Link to='/Home'>Home</Link> </li>
                    <li class='menu'> <Link to='/LoginPage'>Login</Link> </li>
                    <li class='menu'> <Link to='/SignUp'>SignUp</Link> </li>
                </ul>
            );
        }
    };

export default Menu;