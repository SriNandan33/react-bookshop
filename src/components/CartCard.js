import React from 'react';


const CartCard = ({item, removeBookFromCart, handleIncreaseQuantity, handleDecreaseQuantity}) =>{
	return(
		<div className="cart-list-item">
			<img src={item.thumbnail} alt={item.title}/>
			<div className="cart-item-content">
				<p>{item.title}</p>
				<p>${`${item.price * item.quantity}`}</p>
				<div className="cart-quantity">
					<button onClick={()=>handleDecreaseQuantity(item)}>-</button>
					<div>{item.quantity}</div>
					<button onClick={()=>handleIncreaseQuantity(item)}>+</button>
				</div>
			</div>
			<div className="cart-remove-btn" onClick={()=>removeBookFromCart(item)}>
				<i className="far fa-trash-alt"></i>
			</div>
		</div>
	);
}

export default CartCard;