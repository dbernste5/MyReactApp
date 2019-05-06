import React, { Component } from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import Main from './Main';
import Menu from './Menu';


class App extends Component 
{
	
  	render()
 {
	
	return (

			<div >
					<Header/>
					<Menu/>
					<Main/>
					<Footer/>     			
      </div>
    );
	}
	

}
export default App;



