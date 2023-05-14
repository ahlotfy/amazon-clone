import { createContext, useContext, useState } from "react";
import React from "react";
import { Blur } from "./BlurStyle";
const GlobalBlur = createContext();
const BlurProvider = ({ children }) => {
  const [blur, setBlur] = useState(false);
  return (
    <GlobalBlur.Provider value={{ blur, setBlur }}>
      <div style={{ position: "relative" }}>
        {children}
        <Blur
          style={{
            opacity: blur ? 0.6 : "",
            visibility: blur ? "visible" : "hidden",
          }}
          onClick={() => {
            setBlur(false);
          }}
        />
      </div>
    </GlobalBlur.Provider>
  );
};
export default BlurProvider;
export const useBlur = () => {
  return useContext(GlobalBlur);
};
