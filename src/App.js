import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component 
{
	list =[];
	display =this.list.map(s=> <li>{s}</li>);
	//if you want to have state or props you need to have a constructor
	constructor(props) 
	{
		super(props);
    this.state = {	value: '' };
	}
	makeForm()
	{
		return(
			<form  onSubmit={this.onAddCard}>
			<div >
				<label>
					Enter Card:
					<input type="text" ref="newCard" onChange={this.handleChangeValue} />
				</label>
			</div>
			<button type="submit"	>Add Card</button>
		</form>
			);
	}

	handleChangeValue= event=>{
		this.setState({ value: event.target.value });
	}

	onAddCard =event=>{
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
					<ul>{this.display}</ul>
						{this.makeForm()}
      </div>
    );
	}
	

}
export default App;


