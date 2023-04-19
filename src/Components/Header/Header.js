import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../images/icon/search-icon.png";
import shoppingCart from "../../images/icon/shopping-cart.png";
import { Div, A, Img, Input } from "./HeaderStyle";
import { useAuth } from "../../Context/GlobalState";
import { auth } from "../../firebase";
import logo from "../../images/icon/logo-white.png";
const Header = () => {
  const [show, setShow] = useState(false);
  const { user } = useAuth();
  const handleAuth = () => {
    auth.signOut();
  };
  return (
    <Div className="header">
      <Div className="top-floor">
        <A as={Link} to="/" className="header-logo">
          <Img src={logo} alt="amazon" className="logo" />
        </A>
        <Div className="icon-bar">
          <Input type="checkbox" id="toggle-bar" name="rad1" />
          <label htmlFor="toggle-bar" onClick={() => setShow(!show)}>
            <span></span>
          </label>
        </Div>
      </Div>
      <Div className="header-search">
        <Input
          type="text"
          placeholder="Search Amazone"
          className="input-search"
        />
        <Div className="search-icon-box">
          <img src={searchIcon} alt="search" />
        </Div>
      </Div>
      <Div
        className="header-nav"
        style={{
          transform: show ? "translateX(0%)" : "translateX(105%)",
        }}
      >
        <Link to={!user && "/signin"}>
          <Div className="header-option" onClick={handleAuth}>
            <Div className="header-optionLineOne">
              <span>Hello, {user ? user.email : "Guest"}</span>
            </Div>
            <Div className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </Div>
          </Div>
        </Link>
        <Link to="/orders">
          <Div className="header-option">
            <Div className="header-optionLineOne">Returns</Div>
            <Div className="header-optionLineTwo">& Orders</Div>
          </Div>
        </Link>
        <Link to="/checkout">
          <Div className="header-optionBasket">
            <img src={shoppingCart} alt="cart" />
            <span className="header-optionLineTwo header-basketCount">5</span>
          </Div>
        </Link>
      </Div>
    </Div>
  );
};

export default Header;
