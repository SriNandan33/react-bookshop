import React from 'react';


const BookCard = ({book}) =>(

	<div className="book-list-item">
		<img src={book.thumbnail} />
		<p>{book.title}</p>
		<p>${book.price}</p>
		<button>Add To Cart</button>
	</div>

)

export default BookCard;