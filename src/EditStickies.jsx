import React, { Component, Fragment } from 'react';
import Cookies from 'js-cookie';
import {Link }from 'react-router-dom';
import './sticky.css';

class EditStickies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showStickies: false,
            stickyList: [],
            stickyEdits:[],
            successMsg: ''
        };
        this.fetchStickies = this.fetchStickies.bind(this);
        this.onSaveChanges = this.onSaveChanges.bind(this);
        this.onChangeStickyText = this.onChangeStickyText.bind(this);
    }
               
    componentDidMount() {
        this.fetchStickies();
    }

    fetchStickies() {
        //get the relevant stickies from the DB and map them to a list item
        fetch("/userStickies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if(response.status===200) {
                response.json().then((data)=> { 
                    for(var key in data) {
                        var title;
                        var body;
                        var stickyID;
                        if (data.hasOwnProperty(key)) {
                            var value = data[key];
                            for (var k in value) {
                                if (value.hasOwnProperty(k)) {
                                    if(k === "Title") {
                                        title = value[k];
                                    }else if(k ==="Body"){
                                        body = value[k];
                                    }else if(k ==="StickyId") {
                                        stickyID = value[k];
                                    }
                                }
                            }
                        this.state.stickyList.push( 
                            <a  id= 'stickydisplay' href='#' >
                                <h5>{title}</h5> 
                                <textarea id= {stickyID} rows='8'  name ='stickyText' onChange={event=>this.onChangeStickyText(event)}>
                                {body}
                                </textarea>
                            </a>);
                        }
                    }
                    this.setState({showStickies: true });
                })
            }
            else if(response.status===204) {
                //user has no stickies to show
                this.state.stickyList.push('You have no saved stickies');
                this.setState({showStickies: true });
            }
            else {
                this.setState({showStickies: false});
            }
        })
    
    }

    
    onChangeStickyText(event) {
        this.setState({successMsg: ''});
        let newText = event.target.value;
        let stickyID = event.target.id;
                
        //if this sticky is already in our list, delete it and replace it
        var result = this.state.stickyEdits.find(obj => { return obj.id === stickyID });
        if(result !== undefined) {
            var index= this.state.stickyEdits.indexOf(result);
            this.state.stickyEdits.splice(index,1);
        }       
         
        //add changes to list
        this.state.stickyEdits.push({id: stickyID, text: newText });
    }


    onSaveChanges() {
        fetch("/editStickies", {
            method: "POST",
            body: JSON.stringify(this.state.stickyEdits),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if(response.status === 200) {
                //stickies updated successfully
                this.setState({successMsg: "Changes Saved."});
            }
            else {
                //error has occurred, contact IT
                this.setState({successMsg: "Unable to save changes. Please contact IT"});
            }
        })
    }


    render() {
        if(this.state.showStickies) {
            this.list2 = this.state.stickyList.map(s=> <li >{s}</li>);
            return(
                <Fragment>
                    <link  href="http://fonts.googleapis.com/css?family=Reenie+Beanie:regular" rel="stylesheet" type="text/css"/> 
                    <h3>Edit Your Stickies:</h3><br/>
                    <button onClick={this.onSaveChanges} class='buttons'>Save Changes</button>
                    <br/><br/>
                    <Link to='/viewStickies' class='buttons'>Back to Stickies View</Link>
                    <br/><br/>
                    <h3>{this.state.successMsg}</h3>
                    <ul>
                        {this.list2} 
                    </ul>
                  
                </Fragment>
            )
        }
        else {
            //cudnt load user stickies "an error has occurred"
            return(
                <Fragment> 
                <h2>An error has occurred. <br/>Unable to load your stickies.</h2>
                </Fragment>
            )
        }
        
    }
}
export default EditStickies
