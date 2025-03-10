export const defaultCart = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.item],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    case "REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.filter((_, i) => i !== action.payload.index),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
  }
}
