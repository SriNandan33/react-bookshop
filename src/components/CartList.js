import React from 'react';
import CartCard from './CartCard';

const CartList = ({cartItems, removeBookFromCart}) =>{
	return(
		<div className="cart-list">
			<React.Fragment>
				{cartItems.map(item=>(
					<CartCard 
						key={`cart-${item.id}`} 
						item={item}
						removeBookFromCart={removeBookFromCart}
					/>
				))}
			</React.Fragment>
		</div>
	);
}

export default CartList;