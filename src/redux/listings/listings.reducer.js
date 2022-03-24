import ActionsType from '../utils/actions.type'

const INITIAL_STATE = {
  listings: [],
  error: {},
  response: {}
}

const listingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.SET_LISTINGS:
      return {
        ...state,
        listings: action.payload
      }
    case ActionsType.API_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case ActionsType.API_SUCCESS:
      return {
        ...state,
        response: action.payload
      }
    default:
      return state
  }
}

export default listingsReducer
