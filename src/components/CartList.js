import React from 'react';
import CartCard from './CartCard';

const CartList = ({
		cartItems,
		cartTotal,
		removeBookFromCart,
		handleIncreaseQuantity,
		handleDecreaseQuantity
	}) =>{
	return(
		<div className="cart-list">
			<React.Fragment>
				<div className="cart-details">
					<p>Items: {cartItems.length}</p>
					<p className="cart-total">Total: <i className="fas fa-rupee-sign"></i> {cartTotal}</p>
				</div>
				<hr />
				{cartItems.map(item=>(
					<CartCard 
						key={`cart-${item.id}`} 
						item={item}
						removeBookFromCart={removeBookFromCart}
						handleIncreaseQuantity={handleIncreaseQuantity}
						handleDecreaseQuantity={handleDecreaseQuantity}
					/>
				))}
			</React.Fragment>
		</div>
	);
}

export default CartList;