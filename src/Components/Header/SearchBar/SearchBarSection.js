// Basic
import React, { useEffect, useState } from "react";
// Data
import PRODUCTS_DATA from "../../../Data/products.json";
// Context API
import { useBlur } from "../../../Context/Blur/Blur";
// Style
import {
  DropSearch,
  SearchBar,
  SearchIcon,
  WrapInput,
  SearchInput,
  ResultSearch,
} from "./SearchBarStyle";
const SearchBarSection = () => {
  const { blur, setBlur } = useBlur();
  const [inputValue, setInputValue] = useState("");
  const [showValueInInput, setShowValueInInput] = useState(inputValue);
  const [isDropOpen, setDropOpen] = useState(false);
  const [uniqueData, setUniqueData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  // For Drop Search
  const handleInput = (e) => {
    setInputValue(e.target.value.toLowerCase());
    setShowValueInInput(e.target.value.toLowerCase());
    setSelectedItem(-1);

    if (
      data.length > 0 &&
      e.target.value.length > 0 &&
      e.target.value.length !== 0
    ) {
      setTimeout(() => {
        setDropOpen(true);
      }, 100);
    } else {
      setDropOpen(false);
    }
  };

  useEffect(() => {
    if (blur === false) {
      setDropOpen(false);
    }
  }, [blur]);

  // Filter Data Species
  useEffect(() => {
    setUniqueData(
      [
        ...new Set(PRODUCTS_DATA.map((data) => data.type.toLowerCase())),
        ...new Set(PRODUCTS_DATA.map((data) => data.brand.toLowerCase())),
      ]
        .filter(
          (data) => data.includes(inputValue) && data.startsWith(inputValue)
        )
        .slice(0, 10)
    );
  }, [inputValue]);

  // Start Keyboard

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
      setDropOpen(false);
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
  // End Keyboard

  return (
    <SearchBar
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
        <SearchInput
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
      <DropSearch className={isDropOpen ? "active" : ""}>
        {uniqueData?.slice(0, 10).map((data, index) => {
          return (
            <ResultSearch key={index}>
              <a
                href={`/search#${data}`}
                onClick={() => {
                  setDropOpen(false);
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
            </ResultSearch>
          );
        })}
      </DropSearch>
    </SearchBar>
  );
};

export default SearchBarSection;
