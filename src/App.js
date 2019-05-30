import React, { Component, Fragment } from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import Main from './Main';
import Menu from './Menu';


class App extends Component {
	constructor(props) {
		super(props);
		this.state= {loggedIn:false};
	}

	render() {
	return (

		<div id='container'>
			<table>
				<tr>
					<td>
						<Header/>
					</td>
					<td class='menuRow'> 
						<Menu loggedIn= {this.state.loggedIn}/>
					</td>
				</tr>
			</table>
			<div id='body'>
				<Main 
						logInUser={()=>{this.setState({loggedIn: true})}}
						logoutUser={()=>{this.setState({loggedIn:false})}}
						loggedIn= {this.state.loggedIn}/>
			</div>
			<Footer/>
		</div>
		);
	}
}
export default App;
