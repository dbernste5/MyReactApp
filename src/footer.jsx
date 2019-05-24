import React, { Component, Fragment } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return        (
            <Fragment>
                <footer>
                    <p>&copy; 2019 Deborah Shulman, Rachel Bernstein, Hadassah Nimchinsky</p>
                </footer>
            </Fragment>
        )
    }
}
export default Footer