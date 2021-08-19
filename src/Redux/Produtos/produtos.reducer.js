import productsTypes from "./produtos.tipos";

const INITIAL_STATE = {
  products: [],
}

const productsReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case productsTypes.SET_PRODUTOS:
      return {
        ...state,
        products: action.payload,
      }
      default:
        return state
    
  }
}

export default productsReducer