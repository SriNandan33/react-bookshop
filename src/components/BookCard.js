import React from 'react';


const BookCard = ({book, addBookToCart, cartItems}) =>{
	let doesBookExistInCart = cartItems.filter(item=> item.id === book.id).length > 0;
	return(
		<div className="book-list-item">
			<img src={book.thumbnail} alt={book.name}/>
			<p>{book.title}</p>
			<p className="book-price"><i className="fas fa-rupee-sign"></i> {book.price}</p>
			<button 
				onClick={()=>addBookToCart(book)} 
				className={`cart-button ${doesBookExistInCart? 'in-cart':''}`}
			>
				{doesBookExistInCart? <span><i className="fas fa-check"></i> Added</span>: <span>Add To Cart</span>}
			</button>
		</div>
	);
	

}

export default BookCard;