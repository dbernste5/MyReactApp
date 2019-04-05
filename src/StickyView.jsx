import React, { Component, Fragment } from 'react';

class StickyView extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { };
        this.stickies = [];
    }

    componentDidMount()
    {
        //set the state if we decide to
    
        //get the logged in user, send the user ID to the fetch method to get the stickies
        //from the session

        fetchStickies();

    //put the notes we get from the DB into a sticky object so we an render them for viewing
        <li>
        <h2></h2>   
        <p><p>
        </li>
    }

    fetchStickies()
    {
        //get the relevant stickies from the DB and map them to a list
    }

    render()
    {
        //here we render the fragment as the list elements from the mapped list.
        return        (
            <Fragment>
               <ul>
                    {this.stickyNotes} 
               </ul>
            </Fragment>
        )
    }
}
export default StickyView
