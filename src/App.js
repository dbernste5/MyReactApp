import React, { Component, Fragment } from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import Main from './Main';
import Menu from './Menu';


class App extends Component {
	constructor(props) {
		super(props);
		this.state= {loggedIn:false, userID: -1};
	}

	render() {
	console.log("In app UserID: "+this.state.userID);
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
					<Main setUserID= {(ID)=>{this.setState({userID: ID})}}
								userID = {this.state.userID}
								logInUser={()=>{this.setState({loggedIn: true})}}
								logoutUser={()=>{this.setState({loggedIn:false})}}/>
					
					<Footer/>
			</Fragment>
		);
	}
}
export default App;
