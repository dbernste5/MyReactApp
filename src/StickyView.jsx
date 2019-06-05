import React, { Component, Fragment } from 'react';
import Cookies from 'js-cookie';
import {Link }from 'react-router-dom';
import './sticky.css';

class StickyView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showStickies: false,
            stickyList: [],
            stickiesToDelete: [],
            userMsg: ''
        };
        this.fetchStickies = this.fetchStickies.bind(this);
        this.onDeleteStickies = this.onDeleteStickies.bind(this);
        this.onChangeStickyChecked = this.onChangeStickyChecked.bind(this);
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
                        this.state.stickyList.push( <a  id= 'stickydisplay' href='#' ><input type = 'checkbox'  className='checkbox'onChange={event=>this.onChangeStickyChecked(event)} name={stickyID}/><h5>{title}</h5> <p>{body}</p></a>);
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

    onChangeStickyChecked(event) {
        this.setState({userMsg: ''});
        let isChecked =event.target.checked;
        let item =event.target.name;
        if(isChecked){
           //add to the list
            this.state.stickiesToDelete.push(item);     
        }
        else {
            //remove from the list
            var index = this.state.stickiesToDelete.indexOf(item);
            if (index > -1) {
                this.state.stickiesToDelete.splice(index, 1);
            }
        }       
    }

    onDeleteStickies() {
       if(this.state.stickiesToDelete.length < 1) {
            //there are no stickies
            this.setState({ userMsg: "Please select the stickies you would like to delete."}); 
       }
       else {
            //confirm with the user first.
            let confirmed = window.confirm("Are you sure you want to delete the selected stickies? ");
                //send the checked sticky ID's to the DB to delete if confirmed
                if(confirmed){
                    fetch("/deleteStickies", {
                        method: "POST",
                        body: JSON.stringify(this.state.stickiesToDelete),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((response) => {
                        if(response.status === 200) {
                            this.setState({userMsg: "Stickies successfully deleted."});
                                        
                            //make sure they all appear unchecked
                            var stickiesToUncheck = document.getElementsByClassName("checkbox");                        
                            for(var i=0; i<stickiesToUncheck.length; i++) {
                                stickiesToUncheck[i].checked = false; 
                            }       
                            
                            //refresh the page, clear the stickies and fetch them again
                            this.state.stickyList = [];
                            this.fetchStickies();
                            //also clear the stickies to delete list
                            this.state.stickiesToDelete = [];
                        }
                        else if(response.status === 401) {
                        this.setState({userMsg: "An error occurred, unable to delete stickies. Please contact IT"});
                        }

                    })
                } else {
                    //uncheck the checkboxes
                    this.setState({stickiesToDelete: []});
                    var stickiesToUncheck = document.getElementsByClassName("checkbox");                        
                    for(var i=0; i<stickiesToUncheck.length; i++) {
                        stickiesToUncheck[i].checked = false; 
                    }
                }

        }
        
    }


    render() {
        if(this.state.showStickies) {
            this.list2 = this.state.stickyList.map(s=> <li >{s}</li>);
            return(
                <Fragment>
                    <link  href="http://fonts.googleapis.com/css?family=Reenie+Beanie:regular" rel="stylesheet" type="text/css"/> 
                    <h3>{Cookies.get('userName')}'s Stickies</h3><br/>
                   <div>
                        <Link to='/addSticky' class='buttons'>Add New Sticky</Link><br/><br/>
                        <button onClick={this.onDeleteStickies} class='buttons'>Delete Selected Stickies</button>
                        <br/><br/>
                        <Link to='/EditStickies' class='buttons'>Edit My Stickies</Link>
                    </div>
                    <br/><br/>
                    <h3>{this.state.userMsg}</h3>
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
export default StickyView
