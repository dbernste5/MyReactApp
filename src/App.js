import React, { Component } from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import Main from './Main';
import Menu from './Menu';


class App extends Component 
{
	constructor(props)
	{
		super(props);
		this.state= {loggedIn:false, userID: -1};
	}

	render()
 {
	console.log("In app UserID: "+this.state.userID);
	return (

			<div >
					<Header/>
					<Menu loggedIn= {this.state.loggedIn}/>
					<Main setUserID= {(ID)=>{this.setState({userID: ID})}} userID = {this.state.userID} 
								logInUser={()=>{this.setState({loggedIn: true})}}/>
					<Footer/>     			
      </div>
    );
	}
	

}
export default App;



