import React, { Component } from 'react';
import {books} from './data';
import Header from './Header';
import BookList from './BookList';
import CartList from './CartList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      cart: [],
      openCart: false,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.addBookToCart = this.addBookToCart.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.removeBookFromCart = this.removeBookFromCart.bind(this);
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
  removeBookFromCart(book){
    let cartItems=  this.state.cart.slice();
    cartItems = cartItems.filter(cartItem=> cartItem.id !== book.id)
    this.setState({
      cart: cartItems
    });

  }
  handleCartOpen(){
    this.setState({
      openCart: !this.state.openCart,
    });
  }
  render() {
    let {keyword, cart} = this.state;
    const filteredBooks = books.filter((book)=>{
      let bookTitle = book.title.toLowerCase();
      return bookTitle.indexOf(keyword) > -1;
    });
    return (
    	<div>
    		<Header 
          handleSearchChange={this.handleSearchChange}
          cartCount={this.state.cart.length}
          handleCartOpen={this.handleCartOpen}
        />
	    	<div className="container">
		    	<BookList books={filteredBooks}
                    addBookToCart={this.addBookToCart}
         />
        <div className={`cart-container ${this.state.openCart? 'cart-open' : ''}`}>
          <CartList 
            cartItems={cart}
            removeBookFromCart={this.removeBookFromCart}
          />
        </div>
	     	</div>
	    </div>
    );
  }
}

export default App;
