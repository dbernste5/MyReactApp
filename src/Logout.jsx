import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class Logout extends Component
{
    

    render()
    {   
        fetch("/logout", {method: "POST",});
        return <Redirect to='/LoginPage'/>;
    }



}
export default Logout
