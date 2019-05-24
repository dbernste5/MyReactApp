import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class Logout extends Component {
    render(props) {
        fetch("/logout", {method: "POST",});
        this.props.logoutUser();
        return <Redirect to='/LoginPage'/>;
    }
}
export default Logout
