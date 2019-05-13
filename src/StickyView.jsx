import React, { Component, Fragment } from 'react';

class StickyView extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { };
        this.stickies = [];

        this.stickynote = this.stickynote.bind(this);
        this.fetchStickies = this.fetchStickies.bind(this);
    }

    componentDidMount()
    {
        //set the state if we decide to
    
        //get the logged in user, send the user ID to the fetch method to get the stickies
        //from the session

        this.fetchStickies();

    //put the notes we get from the DB into a sticky object so we an render them for viewing
       this.stickynote(); //call this method for each row from db
    }

   
    stickynote(title, body)
    {
        return(
           <li>
             <h2>{title}</h2>
             <p>{body}</p>
            </li>
        )
    } 

    fetchStickies()
    {
        //get the relevant stickies from the DB and map them to a list
    }

    render()
    {
        //here we render the fragment as the list elements from the mapped list.
        return(
            <Fragment>
               <ul>
                    {this.stickyNotes} 
               </ul>
            </Fragment>
        )
    }
}
export default StickyView
