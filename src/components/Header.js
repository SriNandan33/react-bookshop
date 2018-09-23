import React from 'react';



class Header extends React.Component{
	render(){
		let {handleSearchChange, cartCount, handleCartOpen} = this.props;
		return(
			<header className="header">
				<div className="main-title"><h1><i className="fas fa-book-open"></i> BookShopy</h1></div>
				<div className="search-form-container">
					<form className="serach-form">
						<input type="text" placeholder="Search for Books..."  onChange={(e)=>handleSearchChange(e)}/>
					</form>
				</div>
				<div className="cart">
					<i className="fas fa-shopping-cart cart-icon" onClick={handleCartOpen} >
						<span className="cart-count">{cartCount}</span>
					</i>

				</div>
			</header>
		)
	}
}

export default Header;