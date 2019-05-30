import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class AddSticky extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            stickySuccess: false,
            errorMessage: ''
        };

        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeTitle =this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);  
    }

    form() {
        return(
        <form id="addStickyForm" onSubmit={this.onSubmitForm}>
            <label>Title</label><br/>
            <input id="title" type="text" onChange={event => this.onChangeTitle(event)} required='true'></input><br/><br/>
            <label>Body</label><br/>
            <textarea id="body"  rows='15' cols='50' onChange={event => this.onChangeBody(event)} required='true'></textarea><br/><br/>
            <button id= "addStickySubmit" type="submit" >Add Sticky</button>
        </form>)
    }
    onChangeTitle(event) {
        this.setState({title: event.target.value});
    }
    onChangeBody(event) {
        this.setState({body: event.target.value});
    }
    
    onSubmitForm(event) {
        event.preventDefault();
        fetch("/stickynote", {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((response) => {
                if(response.status===200)
                {
                    this.setState({stickySuccess: true});
                }
                else{
                    this.setState({stickySuccess: false, errorMessage: "An Error occurred while saving your Sticky. Please contact IT for help."});
                }            
            }
            )
    }

    render() {
        if(this.state.stickySuccess) {
            return(
                <Fragment>
                    <h2>Add Sticky Note</h2>
                    <h5>Sticky added successfully!</h5>
                    <Link to='/viewStickies'>View Stickies Here</Link>
                    {this.form()}
                </Fragment>
            )
        }
        else {
            return(
                    <Fragment>
                        <h5>{this.state.errorMessage}</h5>
                        <h2>Add Sticky Note</h2>
                        {this.form()}
                    </Fragment>
                )
        }
    }
}

export default AddSticky


