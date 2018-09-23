import React, { Component } from 'react';
import {books} from './data';
import Header from './Header';
import BookList from './BookList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={keyword: '',};
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(e){
    this.setState({
      keyword: e.target.value.toLowerCase()

    });
  }
  render() {
    let {keyword} = this.state;
    const filteredBooks = books.filter((book)=>{
      let bookTitle = book.title.toLowerCase();
      return bookTitle.indexOf(keyword) > -1;
    });
    return (
    	<div>
    		<Header handleSearchChange={this.handleSearchChange}/>
	    	<div className="container">
		    	<BookList books={filteredBooks} />
	     	</div>
	    </div>
    );
  }
}

export default App;
