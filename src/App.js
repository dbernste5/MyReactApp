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

		<Fragment >
			<table>
				<tr>
					<td>
						<Header/>
					</td>
					<td>
						<Menu loggedIn= {this.state.loggedIn}/>
					</td>
				</tr>
			</table>
			<Main 	logInUser={()=>{this.setState({loggedIn: true})}}
					logoutUser={()=>{this.setState({loggedIn:false})}}
					loggedIn= {this.state.loggedIn}/>
			<Footer/>
		</Fragment>
		);
	}
}
export default App;
