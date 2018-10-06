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
      isMobile: false,
      cartTotal: 0,
      openCart: false,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.addBookToCart = this.addBookToCart.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.removeBookFromCart = this.removeBookFromCart.bind(this);
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }
  handleSearchChange(e){
    this.setState({
      keyword: e.target.value.toLowerCase()

    });
  }
  handleSearchSubmit(e){
    e.preventDefault();
  }
  handleMobileSearch(){
    this.setState({
      isMobile: true
    })
  }
  handleBackClick(){
    this.setState({
      isMobile: false,
      keyword: '',
    })
  }
  addBookToCart(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let doesBookExist = cartItems.filter(item=> item.id=== book.id).length > 0;
    if(!doesBookExist){
      cartItems.push({...book, quantity: 1});
      this.setState({
        cart: cartItems,
        cartTotal: cartTotal += book.price,
      });
    }
  }
  removeBookFromCart(book){
    let cartItems=  this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    cartItems = cartItems.filter(cartItem=> cartItem.id !== book.id)
    this.setState({
      cart: cartItems,
      cartTotal: cartTotal -= (book.price * book.quantity)
    });

  }
  handleIncreaseQuantity(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let bookIndex = cartItems.findIndex(item => item.id===book.id);
    cartItems[bookIndex].quantity += 1;
    this.setState({
      cart: cartItems,
      cartTotal: cartTotal += book.price,
    });
  }
  handleDecreaseQuantity(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let bookIndex = cartItems.findIndex(item => item.id===book.id);
    let currentQuantity = cartItems[bookIndex].quantity;
    if(currentQuantity > 1){
      cartItems[bookIndex].quantity -= 1;
      this.setState({
        cart: cartItems,
        cartTotal: cartTotal -= book.price,
      });
    }else{
      // decreasing quantity from 1 to 0 should remove book from cart.
      this.removeBookFromCart(book);
    }
  }
  handleCartOpen(){
    this.setState({
      openCart: !this.state.openCart,
    });
  }
  render() {
    let {keyword, cart, cartTotal, isMobile} = this.state;
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
          keyword={keyword}
          isMobile={isMobile}
          handleMobileSearch={this.handleMobileSearch}
          handleBackClick = {this.handleBackClick}
          handleSearchSubmit={this.handleSearchSubmit}
        />
	    	<div className="container">
		    	<BookList books={filteredBooks}
                    addBookToCart={this.addBookToCart}
                    cartItems={cart}
         />
        <div className={`cart-container ${this.state.openCart? 'cart-open' : ''}`}>
          <CartList 
            cartItems={cart}
            cartTotal={cartTotal}
            removeBookFromCart={this.removeBookFromCart}
            handleIncreaseQuantity={this.handleIncreaseQuantity}
            handleDecreaseQuantity={this.handleDecreaseQuantity}
          />
        </div>
	     	</div>
	    </div>
    );
  }
}

export default App;
