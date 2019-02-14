import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component 
{
	list =[];
	display =this.list.map(s=> <li>{s}</li>);
	constructor(props) 
	{
		super(props);
    this.state = {	value: '' };
		this.addCard =this.addCard.bind(this);
		this.onChangeValue = this.onChangeValue.bind(this);
	}
	makeForm()
	{
		return(
			<form  onSubmit={this.addCard}>
			<div >
				<label>
					Enter Card:
					<input type="text" ref="newCard" onChange={this.onChangeValue} />
				</label>
			</div>
			<button type="submit"	>Add Card</button>
		</form>
			);
	}

	onChangeValue(event){
		this.setState({ value: event.target.value });
	}

	addCard(event){
		event.preventDefault();
		console.log("Value:" + this.state.value)
		this.list.push(this.state.value);
		this.display = this.list.map(s=> <li>{s}</li>);
		this.setState({ value: '' });
		this.refs.newCard.value='';
  }

	render()
 {
    return (

			<div className="App">
			{
				<div>
					<ul>{this.display}</ul>
						{this.makeForm()}
				</div>
			}
      </div>
    );
	}
	

}
export default App;


