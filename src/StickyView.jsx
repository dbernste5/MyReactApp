import React, { Component, Fragment } from 'react';
import Cookies from 'js-cookie';
import {Link }from 'react-router-dom';
import './sticky.css';

class StickyView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showStickies: false,
            stickyList: []
        };
        this.fetchStickies = this.fetchStickies.bind(this);
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
                        if (data.hasOwnProperty(key)) {
                            var value = data[key];
                            for (var k in value) {
                                if (value.hasOwnProperty(k)) {
                                    if(k === "Title") {
                                        title = value[k];
                                    }else if(k ==="Body"){
                                        body = value[k];
                                    }
                                }
                            }
                        this.state.stickyList.push( <a  id= 'stickydisplay' href='#' ><h5>{title}</h5> <p>{body}</p></a>);
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

    render() {
        if(this.state.showStickies) {
            this.list2 = this.state.stickyList.map(s=> <li >{s}</li>);
            return(
                <Fragment>
                    <link  href="http://fonts.googleapis.com/css?family=Reenie+Beanie:regular" rel="stylesheet" type="text/css"/> 
                    <h3>Stickies for {Cookies.get('userName')}</h3><br/>
                    <ul>
                        {this.list2} 
                   </ul>
                   <br/><Link to='/addSticky'>Add New Sticky</Link>
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
