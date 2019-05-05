import React, { Component } from 'react';
import './App.css';
import Home from './home';
import Footer from './footer';
import Header from './header';
import SignUp from './SignUp';


class App extends Component 
{
	constructor(props)
	{
		this.state = {param : ''};
	}

  	render()
 {
    return (

			<div >
					<Header/>	
					<div>
							
							switch(this.state.page)
							{
								case 'SignUp':
									return <SignUp/>;
								case 'LoginPage':
									return <LoginPage/>;
							}
					
					</div>
					<Footer/>     			
      </div>
    );
	}
	

}
export default App;



