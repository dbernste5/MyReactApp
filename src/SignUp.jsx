import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router';

class SignUp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            signUpSuccess: false
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

    form()
    {
        return(
        <form id="signUpForm" onSubmit={this.onSubmitForm}>
            <label>First Name</label><br/>
            <input id="firstName" type="text" onChange={event => this.onChangeFirst(event)}></input><br/><br/>
            <label>Last Name</label><br/>
            <input id="lastName" type="text" onChange={event => this.onChangeLast(event)}></input><br/><br/>
            <label>Email</label><br/>
            <input id="email" type="text" onChange={event => this.onChangeEmail(event)}></input><br/><br/>
            <label>Phone Number</label><br/>
            <input id="phone" type="text" onChange={event => this.onChangePhone(event)}></input><br/><br/>
            <label>Username</label><br/>
            <input id="username" type="text" onChange={event => this.onChangeUserName(event)}></input><br/><br/>
            <label>Password</label><br/>
            <input id="password" type="password" onChange={event => this.onChangePassword(event)}></input><br/><br/>
            <label>Confirm Password</label><br/>
            <input id="confirmPassword" type="password" onChange={event => this.onChangeConfirmPassword(event)}></input><br/><br/>
            <button id= "signUpSubmit" type="submit" >Submit</button>
        </form>)
    }
    onChangeFirst(event)
    {
        this.setState({firstName: event.target.value});
    }
    onChangeLast(event)
    {
        this.setState({lastName: event.target.value});
    }
    onChangeEmail(event)
    {
        this.setState({email: event.target.value});
    }
    onChangePhone(event)
    {
        this.setState({phone: event.target.value});
    }
    onChangeUserName(event)
    {
        this.setState({username: event.target.value});
    }
    onChangePassword(event)
    {
        this.setState( {password: event.target.value});
    }
    onChangeConfirmPassword(event)
    {
       //check if password matched and display message
    }
    onSubmitForm(event)
    {
        event.preventDefault();
        console.log("testing console- first name: " + this.state.firstName);
        console.log(this.state.username);
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.phone);
        console.log("before fetch");
        fetch("/user", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
              },
        }).then((response) => {
            if(response.status === 200)
            {
            this.setState({signUpSuccess: true});
            }
            console.log('response: ', response.status);
        
        response.json()}
        ).done();
         
        console.log("After fetch");
        
        
        
    }
    render()
    {
        if(this.state.signUpSuccess) //user signed up successfully, now redirect to the login page
        {
            return <Redirect to='/LoginPage'/>;
        }
        else{ //user needs to sign up
            return(
                <Fragment>
                    {this.form()}
                </Fragment>
            )
        }
    }
}
export default SignUp