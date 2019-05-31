import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SignUpSuccess =()=>(
    <Fragment>
        <h1>Sign Up Successful!</h1>
        <br/>
        <br/>
        <Link to='LoginPage' class='buttons'>Please LOGIN to continue</Link>
    </Fragment>
);




export default SignUpSuccess