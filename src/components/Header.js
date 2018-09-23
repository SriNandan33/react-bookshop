import React from 'react';



class Header extends React.Component{
	render(){
		let {handleSearchChange} = this.props;
		return(
			<header className="header">
				<div className="main-title"><h1><i className="fas fa-book-open"></i> BookShopy</h1></div>
				<div className="search-form-container">
					<form className="serach-form">
						<input type="text" placeholder="Search for Books..."  onChange={(e)=>handleSearchChange(e)}/>
					</form>
				</div>
				<span className="cart"><i className="fas fa-shopping-cart cart-icon" ></i></span>
			</header>
		)
	}
}

export default Header;