import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
		cards= ['Card1', 'Card2', 'Card3', 'Card4', 'Card5'];
		list = this.cards.map(s => <li>{s}</li>);

  render() {
	  	
    return (

      <div className="App">
	  {
		<ul>{this.list}</ul>
	  }
      </div>
    );
  }
}

export default App;
