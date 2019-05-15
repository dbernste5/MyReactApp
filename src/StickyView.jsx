import React, { Component, Fragment } from 'react';
import Cookies from 'js-cookie';

class StickyView extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            showStickies: false,
            stickyList: []
         };
        

        this.stickynote = this.stickynote.bind(this);
        this.fetchStickies = this.fetchStickies.bind(this);
    }

    componentDidMount()
    {
        //set the state if we decide to
    
        //get the logged in user, send the user ID to the fetch method to get the stickies
        //from the session

        this.fetchStickies(this.props.userID);
        console.log('componentDidMount');

    //put the notes we get from the DB into a sticky object so we an render them for viewing
       //call this method for each row from db
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

    fetchStickies(userID)
    {
        //get the relevant stickies from the DB and map them to a list
        fetch("/userStickies", {
            method: "POST",
            body: userID,
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            if(response.status===200)
            {
                response.json().then(
                    data=>{ 
                        console.log('looping thru the data after .json():\n');
                        console.log('the keys from object.keys: '+Object.keys(data));
                   var list= [];
                       for (var key in data) {
                        var title;
                        var body;
                        
                            if (data.hasOwnProperty(key)) {
                                console.log(key + " -> " + data[key]);
                               var value = data[key];
                                for (var k in value) {
                                    if (value.hasOwnProperty(k)) {
                                        console.log(k + " -> " + value[k]);
                                        if(k === "Title")
                                        {
                                            title = value[k];
                                        }else if(k ==="Body"){
                                            body = value[k];
                                        }
                                    }
                                }

                                //list.push(
                                   list.push( 
                                        title, body                                    
                                              );
                                   console.log('title in variable: ' +title +' \nbody in variable: '+body+ this.stickynote(title, body)); //);
                            }
                        }
                        console.log('after looped through everything my list: '+ list);
                        this.setState({stickyList:list});
                          console.log('set stickyList to sticky');

                    })
                  this.setState({showStickies: true });
                  console.log("state set");
            }
            else if(response.status===204){
                //user has no stickies to show
                this.stickiesView = 'You have no saved stickies';
            }
            else{
                this.setState({showStickies: false});
            }
            console.log('response: ', response.status);
        
       // response.json()}
         } ).done();
    
    }

    render()
    {
        //here we render the fragment as the list elements from the mapped list.
        
        if(this.state.showStickies)
        {
            this.list2 = this.stickyList.map(s=> <li>{s}</li>);
            return(
                <Fragment>
                    <h3>Stickies for {Cookies.get('userName')}</h3><br/>
                   <ul>
                        {this.state.stickyList} 
                   </ul>
                </Fragment>
            )
        }
        else{
            //cudnt load user stickies "an error has occurred"
            return(<Fragment> <h2>An error has occurred. <br/>Unable to load your stickies.</h2></Fragment>)
        }
        
    }
}
export default StickyView
