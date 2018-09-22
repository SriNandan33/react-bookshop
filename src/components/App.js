import React, { Component } from 'react';
import {books} from './data';
import BookList from './BookList';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div className="container">
	    	<BookList books={books} />
     	</div>
    );
  }
}

export default App;
