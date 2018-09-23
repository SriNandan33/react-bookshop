import React from 'react';


const BookCard = ({book, addBookToCart}) =>(

	<div className="book-list-item">
		<img src={book.thumbnail} alt={book.name}/>
		<p>{book.title}</p>
		<p>${book.price}</p>
		<button onClick={()=>addBookToCart(book)}>Add To Cart</button>
	</div>

)

export default BookCard;