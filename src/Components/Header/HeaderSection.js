import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/icon/logo-white.png";
import { useAuth } from "../../Context/GlobalState";
import { auth } from "../../firebase";
import {
  Header,
  TopFloor,
  Logo,
  SearchSection,
  HeaderOptions,
  HeaderActions,
} from "./HeaderStyle";
const HeaderSection = () => {
  const { user, lengthItems } = useAuth();
  const handleAuth = () => {
    auth.signOut();
  };
  return (
    <Header>
      <TopFloor className="top-floor">
        <Logo as={Link} to="/">
          <img src={logo} alt="amazon" />
        </Logo>
        <SearchSection>
          <input
            id="search-input"
            type="text"
            placeholder="Search Amazone"
            className="input-search"
          />
          <label className="search-icon-box" htmlFor="search-input">
            <i className="fa-solid fa-magnifying-glass" />
          </label>
        </SearchSection>
      </TopFloor>
      <HeaderActions>
        <Link to={!user && "/signin"}>
          <HeaderOptions className="account" onClick={handleAuth}>
            <div className="optionLineOne">
              <span>Hello, {user ? user.email : "Guest"}</span>
            </div>
            <div className="optionLineTwo">{user ? "Sign Out" : "Sign In"}</div>
          </HeaderOptions>
        </Link>
        <Link to="/orders">
          <HeaderOptions>
            <div className="optionLineOne">Returns</div>
            <div className="optionLineTwo">& Orders</div>
          </HeaderOptions>
        </Link>
        <Link to="/cart">
          <HeaderOptions className="basket">
            <i className="fa-solid fa-cart-shopping" />
            <span className="optionLineTwo header-basketCount">
              {lengthItems ? lengthItems : 0}
            </span>
          </HeaderOptions>
        </Link>
      </HeaderActions>
    </Header>
  );
};

export default HeaderSection;
