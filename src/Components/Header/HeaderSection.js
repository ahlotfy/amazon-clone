// Basic
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Context API
import { useAuth } from "../../Context/GlobalState";
import { useBlur } from "../../Context/Blur/Blur";
// Back End
import { auth } from "../../firebase";
// Style
import logo from "../../images/icon/logo-white.png";
import {
  Header,
  TopFloor,
  Logo,
  BarSearch,
  WrapInput,
  SearchIcon,
  DropSearch,
  HeaderOptions,
  OptionLineOne,
  OptionLineTwo,
  Basket,
  HeaderActions,
} from "./HeaderStyle";
import PRODUCTS_DATA from "../../Data/products.json";

const HeaderSection = () => {
  const dropSearchRef = useRef();
  // From Context
  const { user, lengthItems } = useAuth();
  const handleAuth = () => {
    auth.signOut();
  };
  // Blur During Focus On (Input Search).
  const { blur, setBlur } = useBlur();
  // - Start (Input Search Section).
  // Save Written Input
  const [inputValue, setInputValue] = useState("");
  const [showValueInInput, setShowValueInInput] = useState(inputValue);
  //  Type Products For Show In Suggestions List.
  const handleInput = (e) => {
    setInputValue(e.target.value.toLowerCase());
    setShowValueInInput(e.target.value.toLowerCase());
    setSelectedItem(-1);

    if (data.length > 0 && e.target.value.length > 0) {
      setTimeout(() => {
        dropSearchRef.current.style.display = "block";
      }, 100);
    } else {
      dropSearchRef.current.style.display = "none";
    }
  };
  // - End (Input Search Section).

  // Filter Data Species
  const [uniqueData, setUniqueData] = useState([]);
  useEffect(() => {
    setUniqueData(
      [
        ...new Set(PRODUCTS_DATA.map((data) => data.type.toLowerCase())),
        ...new Set(PRODUCTS_DATA.map((data) => data.brand.toLowerCase())),
      ].filter(
        (data) => data.includes(inputValue) && data.startsWith(inputValue)
      )
    );
  }, [inputValue]);
  // Use KeyBoard In Drop Search
  const [selectedItem, setSelectedItem] = useState(-1);
  let data = uniqueData.map((data) => data);
  useEffect(() => {
    setShowValueInInput(data[selectedItem] ? data[selectedItem] : inputValue);
  }, [data, inputValue, selectedItem]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setSelectedItem((prev) => prev - 1);
    } else if (e.key === "ArrowDown" && selectedItem < uniqueData.length - 1) {
      setSelectedItem((prev) => prev + 1);
    } else if (e.key === "Enter") {
      dropSearchRef.current.style.display = "none";
      setBlur(false);
      window.open(
        `/search#${
          inputValue.length !== 0 ? showValueInInput : data[selectedItem]
        }`,
        false
      );
    }

    if (selectedItem === -1 && (e.key === "ArrowUp" || e.key === "DownUp")) {
      showValueInInput(inputValue);
    }

    if (selectedItem === uniqueData.length - 1 && e.key === "ArrowDown") {
      setSelectedItem(-1);
    }

    if (selectedItem <= 0 && e.key === "ArrowUp") {
      setSelectedItem(uniqueData.length - 1);
    }
  };

  return (
    <Header>
      {/* Top Floor ===> Organizes the format in the screens */}
      <TopFloor>
        {/* Start Left Section */}
        <Logo
          href="/"
          onClick={() => {
            setBlur(false);
          }}
        >
          <div className="logo_img">
            <img src={logo} alt="amazon" />
          </div>
        </Logo>
        {/* End Left Section */}
        {/* Start Mid Section */}
        <BarSearch
          onFocus={() => {
            setBlur(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setBlur(false);
            }, 100);
          }}
        >
          <WrapInput
            style={{
              outline: !blur ? "3px solid transparent" : "3px solid #f89501",
            }}
          >
            <input
              id="input-search"
              type="text"
              autoComplete="off"
              placeholder="Search Amazone"
              value={showValueInInput}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
            />
            <SearchIcon htmlFor="input-search">
              <i className="fa-solid fa-magnifying-glass" />
            </SearchIcon>
          </WrapInput>
          <DropSearch ref={dropSearchRef}>
            {uniqueData?.slice(0, 10).map((data, index) => {
              return (
                <div key={index}>
                  <a
                    href={`/search#${data}`}
                    onClick={() => {
                      dropSearchRef.current.style.display = "none";
                      setInputValue(data);
                    }}
                  >
                    <p
                      className={
                        selectedItem === index
                          ? "search_suggestion_line active"
                          : "search_suggestion_line"
                      }
                    >
                      <span>{inputValue}</span>
                      <span>{data.replace(inputValue, "")}</span>
                    </p>
                  </a>
                </div>
              );
            })}
          </DropSearch>
        </BarSearch>
        {/* End Mid Section */}

        {/* Start Right Section */}
      </TopFloor>
      <HeaderActions>
        <Link to={!user && "/signin"}>
          <HeaderOptions className="account" onClick={handleAuth}>
            <OptionLineOne>
              <span>Hello, {user ? user.email : "Guest"}</span>
            </OptionLineOne>
            <OptionLineTwo>{user ? "Sign Out" : "Sign In"}</OptionLineTwo>
          </HeaderOptions>
        </Link>
        <Link to="/orders">
          <HeaderOptions>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOptions>
        </Link>
        <Link to="/cart">
          <Basket>
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
