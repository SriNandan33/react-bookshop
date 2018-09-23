import React from 'react';


const CartCard = ({item, removeBookFromCart}) =>{
	return(
		<div className="cart-list-item">
			<img src={item.thumbnail} alt={item.title}/>
			<div className="cart-item-content">
				<p>{item.title}</p>
				<p>${item.price}</p>
				<div className="cart-quantity">
					<button>-</button>
					<div>1</div>
					<button>+</button>
				</div>
			</div>
			<div className="cart-remove-btn" onClick={()=>removeBookFromCart(item)}>
				<i className="far fa-trash-alt"></i>
			</div>
		</div>
	);
}

export default CartCard;