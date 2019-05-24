import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            signUpSuccess: false,
            duplicateUsername: false,
            passwordConfirmed: true
        };

        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeConfirmPassword =this.onChangeConfirmPassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirst = this.onChangeFirst.bind(this);
        this.onChangeLast = this.onChangeLast.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        
    }

    form() {
        return(
        <form id="signUpForm" onSubmit={this.onSubmitForm}>
            <label>First Name</label><br/>
            <input id="firstName" type="text" onChange={event => this.onChangeFirst(event)} required='true'></input><br/><br/>
            <label>Last Name</label><br/>
            <input id="lastName" type="text" onChange={event => this.onChangeLast(event)} required='true'></input><br/><br/>
            <label>Email</label><br/>
            <input id="email" type="email" onChange={event => this.onChangeEmail(event)} required='true' placeholder="me@example.com"></input><br/><br/>
            <label>Phone Number</label><br/>
            <input id="phone" type="text" onChange={event => this.onChangePhone(event)} required='true'></input><br/><br/>
            <label>Username</label><br/>
            <input id="username" type="text" onChange={event => this.onChangeUserName(event)} required='true'></input><br/><br/>
            <label>Password</label><br/>
            <input id="password" type="password" onChange={event => this.onChangePassword(event)} required='true'></input><br/><br/>
            <label>Confirm Password</label><br/>
            <input id="confirmPassword" type="password" onChange={event => this.onChangeConfirmPassword(event)} required='true'></input><br/><br/>
            <button id= "signUpSubmit" type="submit" >Submit</button>
        </form>)
    }
    onChangeFirst(event) {
        this.setState({firstName: event.target.value});
    }
    onChangeLast(event) {
        this.setState({lastName: event.target.value});
    }
    onChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    onChangePhone(event) {
        this.setState({phone: event.target.value});
    }
    onChangeUserName(event) {
        this.setState({username: event.target.value});
    }
    onChangePassword(event) {
        this.setState( {password: event.target.value});
    }
    onChangeConfirmPassword(event) {
       if(event.target.value !== this.state.password) {
            this.setState({passwordConfirmed: false});
        }
       else{
            this.setState({passwordConfirmed: true});
       }
    }
    onSubmitForm(event) {
        event.preventDefault();
        
        if(this.state.passwordConfirmed) {
            fetch("/user", {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((response) => {
                if(response.status === 200) {
                    this.setState({signUpSuccess: true});
                }
                //duplicate username
                else if(response.status === 409) {
                    this.setState({duplicateUsername: true});
                }
                else {
                    this.setState({duplicateUsername: false});
                }
                console.log('response: ', response.status);
            
            response.json()}
            )
            console.log("After fetch");
        }

    }
    render() {
        //user signed up successfully, now redirect to the login page
        if(this.state.signUpSuccess) {
            return <Redirect to='/LoginPage'/>;
        }
        else if(this.state.duplicateUsername) {
            return(
                <Fragment>
                    <h2>Sign Up</h2>
                    <h4>This username already exists.</h4>
                    {this.form()}
                </Fragment>
            )

        }
        else if(!this.state.passwordConfirmed) {
            return(
                <Fragment>
                    <h2>Sign Up</h2>
                    {this.form()}
                    <h4>Your passwords do not match.</h4>
                </Fragment>
            )
        } else { //user needs to sign up
            return(
                <Fragment>
                    <h2>Sign Up</h2>
                    {this.form()}
                </Fragment>
            )
        }
    }
}
export default SignUp


