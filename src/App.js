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
		this.state= {loggedIn:false}
	}

	render()
 {
	
	return (

			<div >
					<Header/>
					<Menu loggedIn= {this.state.loggedIn}/>
					<Main logInUser={()=>{this.setState({loggedIn: true})}}/>
					<Footer/>     			
      </div>
    );
	}
	

}
export default App;



