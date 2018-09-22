import React, { Component } from 'react';
import {books} from './data';
import Header from './Header';
import BookList from './BookList';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
    		<Header />
	    	<div className="container">
		    	<BookList books={books} />
	     	</div>
	    </div>
    );
  }
}

export default App;
