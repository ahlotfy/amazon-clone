// Basic
import { createContext, useContext, useEffect, useReducer } from "react";
// Reducer
import AppReducer, { initialState } from "./AppReducer";
// Products
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  });
  const quantityItems = state.basket.map((item) => {
    return item.quantity;
  });
  const lengthItems = quantityItems.reduce((a, c) => {
    return a + c;
  }, 0);
  const priceItems = state.basket.map((item) => {
    return item.price * item.quantity;
  });
  const totalPrice = priceItems.reduce((a, c) => {
    return a + c;
  }, 0);
  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        dispatch,
        lengthItems,
        totalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
export const useAuth = () => {
  return useContext(GlobalContext);
};
