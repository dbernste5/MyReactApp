import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        
        if(props.loggedIn) {
            //user wants to log out
            fetch("/logout", {method: "POST",});
            props.logoutUser();
        }

        this.state={ username: '', password: '', validCredentials: true, loggedIn:false};
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeUserName(event) {
        this.setState({username: event.target.value});
    }
    onChangePassword(event) {
        this.setState( {password: event.target.value});
    }
    
    onSubmitForm(event) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
              },
        }
        ).then(response=> {
            if(response.status===200) {
                this.setState({validCredentials: true, loggedIn:true});
                this.props.logInUser();                        
            } else if (response.status === 401) {
                this.setState({validCredentials: false});
            }      
        })
        
    }



    render() {
        //already logged in
        if(this.state.loggedIn) {
            return <Redirect to='/Home'/>;
        }
        else if(!this.state.validCredentials) {
            //invalid credentials
            var errorMessage = "Invalid Username or Password...";    
        }

        return( 
            <Fragment>
                <h2>Login</h2>
                <h3>{errorMessage}</h3>
                <form id="LoginForm" onSubmit={this.onSubmitForm}>
                    <label>Username</label><br/>
                    <input id="username" type="text" onChange={event => this.onChangeUserName(event)}></input><br/><br/>
                    <label>Password</label><br/>
                    <input id="password" type="password" onChange={event => this.onChangePassword(event)}></input><br/><br/>
                    <button id= "LoginSubmit" type="submit" >Login</button>
                </form>
                <br/>
                <Link to='/SignUp'>New User? Sign up</Link>
            </Fragment>
        );
    }
        
    
}
export default LoginPage
