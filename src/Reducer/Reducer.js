export const cartReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return { ...state, products: action.payload }
        case "GET_SINGLE_PRODUCT":
            return { ...state, singleProduct: action.payload }
        case "ADD_TO_CART":
            return { ...state, cart: [{ ...action.payload }, ...state.cart] }
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) }
        case "CLEAR_CART":
            return { ...state, cart: [] }
        case "CHANGE_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                  c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
              };
        default:
            break;
    }
}