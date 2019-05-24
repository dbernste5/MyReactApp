import React, { Component, Fragment } from 'react';

class sticky extends Component {
    constructor(props) {
        super(props);

        this.state={}
    }

    stickynote(title, body) {
        return(
           <li>
             <h2>{title}</h2>
             <p>{body}</p>
            </li>
        )
    }


    render() {
        return(
            <Fragment>
            {this.stickynote(title, body)};
            </Fragment>
        )
    }
}

export default sticky;