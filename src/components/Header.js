import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './basefire'
function Header(){

    const [{cart,loggedInUser},dispatch] = useStateValue();

    

    // console.log("my cart", cart);

    const logoutUser = () =>{
        if(loggedInUser){
            auth.signOut();
        }
    }

    return(
        <nav className='header'> 
        <img className='header--logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amzon_logo"/>
        <div className="header--search">
            <input type="text" className='header--searchInput' />
            <SearchIcon className="header--searchIcon"/>
        </div>
        <div className="header--nav">
            {/* 1st link */}
        <Link to={!loggedInUser && "/login"} className='header--link'>
            <div onClick={logoutUser} className="header--option">
                <span className='header--optionLineOne'>Hello, {loggedInUser?.email}</span>
                <span className='header--optionLineTwo'>{loggedInUser? 'Sign Out': 'Sign In'}</span>
            </div>
        </Link>
        
        {/* 2nd link */}
        <Link to="/" className='header--link'>
            <div className="header--option">
                <span className='header--optionLineOne'>Returns</span>
                <span className='header--optionLineTwo'>&Orders</span>
            </div>
        </Link>
        </div>

        {/* Basket Icon with number */}
        <Link to="/checkout" className='header--link'>
            <div className="header--optionBasket">
                <LocalGroceryStoreIcon/>
                {/* number of items in the basket */}
                <span className="header--optionLineTwo header--productCount">{cart?.length}</span>
            </div>
        </Link>
        </nav>
    )
}

export default Header;