import React, { Component, Fragment } from 'react';
import stickiesLogo from './stickiesLogo.jpg';

class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return(
        <Fragment>
            <header>               
                <img src={stickiesLogo} alt="stickiesLogo" ></img>
            </header>            
        </Fragment>
        )
    }
}
export default Header