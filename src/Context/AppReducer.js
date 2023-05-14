const cloud = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : {
      basket: [],
      user: null,
    };
export const initialState = cloud;
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      const addItem = state.basket.find((item) => item.id === action.item.id);
      if (addItem == null) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          basket: [
            ...state.basket.filter((item) => item.id !== action.item.id),
            { ...action.item, quantity: addItem.quantity + 1 },
          ],
        };
      }
    case "DELETE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    case "CHANGE_QUANTITY":
      const quantityItem = state.basket.find((item) => item.id === action.id);
      if (quantityItem) {
        return {
          ...state,
          basket: [
            { ...quantityItem, quantity: +action.value },
            ...state.basket.filter((item) => item.id !== action.id),
          ],
        };
      } else {
        return { ...state };
      }
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
export default AppReducer;
