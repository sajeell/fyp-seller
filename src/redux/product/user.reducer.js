import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  products: [],
  error: {},
  response: {},
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case ActionsType.API_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case ActionsType.API_SUCCESS:
      return {
        ...state,
        response: action.payload,
      }
    default:
      return state
  }
}

export default productReducer
