// Basic
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Context API
import { useAuth } from "../../Context/GlobalState";
// Back End
import { auth } from "../../firebase";
// Style
import logo from "../../images/icon/logo-white.png";
import {
  Header,
  IconBar,
  TopFloor,
  IsSmallScreen,
  Logo,
  ImgBox,
  HeaderOptions,
  OptionLineOne,
  OptionLineTwo,
  Basket,
  HeaderActions,
} from "./HeaderStyle";
import SearchBarSection from "./SearchBar/SearchBarSection";

const HeaderSection = () => {
  const smallScreen = window.matchMedia("(max-width: 576px)");
  window.onresize = () => {
    if (smallScreen.matches === false) {
      setOpenBar(false);
    }
  };

  // From Context
  const { user, lengthItems } = useAuth();
  const handleAuth = () => {
    auth.signOut();
  };
  const [isOpenBar, setOpenBar] = useState(false);
  return (
    <Header>
      {/* Top Floor ===> Organizes the format in the screens */}
      <TopFloor>
        {/* Start Left Section */}
        <IsSmallScreen>
          <Logo href="/">
            <ImgBox className="logo_img" tabIndex={0}>
              <img src={logo} alt="amazon" loading="eager" />
            </ImgBox>
          </Logo>
          <IconBar
            onClick={() => {
              setOpenBar(!isOpenBar);
            }}
          >
            <input type="checkbox" readOnly checked={isOpenBar} />
            <label>
              <span></span>
            </label>
          </IconBar>
        </IsSmallScreen>
        {/* End Left Section */}

        {/* Start Mid Section */}
        <SearchBarSection />
        {/* End Mid Section */}

        {/* Start Right Section */}
      </TopFloor>
      <HeaderActions className={isOpenBar ? "active" : ""}>
        <Link to={!user && "/signin"}>
          <HeaderOptions className="account" onClick={handleAuth} tabIndex={0}>
            <OptionLineOne>
              <span>Hello, {user ? user.email : "Guest"}</span>
            </OptionLineOne>
            <OptionLineTwo>{user ? "Sign Out" : "Sign In"}</OptionLineTwo>
          </HeaderOptions>
        </Link>
        <Link to="/orders">
          <HeaderOptions tabIndex={0}>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOptions>
        </Link>
        <Link to="/cart">
          <Basket tabIndex={0}>
            <span>{lengthItems ? lengthItems : 0}</span>
            <i className="fa-solid fa-cart-shopping" />
          </Basket>
        </Link>
      </HeaderActions>
      {/* End Right Section */}
    </Header>
  );
};

export default HeaderSection;
