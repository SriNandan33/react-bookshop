import React, { Component } from 'react';
import {books} from './data';
import Header from './Header';
import BookList from './BookList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      cart: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.addBookToCart = this.addBookToCart.bind(this);
  }
  handleSearchChange(e){
    this.setState({
      keyword: e.target.value.toLowerCase()

    });
  }
  addBookToCart(book){
    let cartItems = this.state.cart.slice();
    let doesBookExist = cartItems.filter(item=> item.id=== book.id).length > 0;
    if(!doesBookExist){
      cartItems.push(book);
      this.setState({
        cart: cartItems
      });
    }
  }
  render() {
    let {keyword} = this.state;
    console.log(this.state)
    const filteredBooks = books.filter((book)=>{
      let bookTitle = book.title.toLowerCase();
      return bookTitle.indexOf(keyword) > -1;
    });
    return (
    	<div>
    		<Header handleSearchChange={this.handleSearchChange} cartCount={this.state.cart.length}/>
	    	<div className="container">
		    	<BookList books={filteredBooks}
                    addBookToCart={this.addBookToCart}
           />
	     	</div>
	    </div>
    );
  }
}

export default App;
