import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const { state_Cart } = useCart()

    return (
        <>
            <nav className="navbar pos-stick flex jc-center a-item-center">
                <div className="nav-inner flex a-item-center jc-space-btw">
                    <div className="navbar--container-strt flex a-item-center">
                        {/* <Link to="/"> */}
                        <div className="brand-name">FlipKicks</div>
                        {/* </Link> */}
                    </div>
                    <div className="navbar--container-middle flex a-item-center">
                        <button className="btn-search-nav">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav__icon_magnifying" ></FontAwesomeIcon>
                        </button>
                        <input
                            className="input-dark"
                            type="text"
                            name=""
                            id=""
                            placeholder="search"
                        />
                    </div>
                    <div className="navbar--container-end flex a-item-center">
                        <div className="nav-icon-container">
                            <div className="nav-heart-icon pos-rel">
                                {/* <Link to="/cart"> */}
                                <FontAwesomeIcon icon={faShoppingCart} className="nav__icons" />
                                {state_Cart.cart.length === 0 || <span className="badge badge-danger">{state_Cart.cart.length}</span>}
                                {/* </Link> */}

                            </div>
                        </div>

                        <div className="nav-icon-container">
                            <div className="nav-cart-icon">

                                {/* <Link to="/wishlist"> */}
                                <FontAwesomeIcon icon={faHeart} className="nav__icons" ></FontAwesomeIcon>
                                <div className="fa-solid fa-cart-shopping" id="cart-icon"></div>
                                {/* </Link> */}
                            </div>
                        </div>

                        {/* <Link to="/login" className="btn-nav jc-center a-item-center"> */}
                        Login
                        {/* </Link> */}
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;