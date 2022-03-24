import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  providers: [],
  error: {},
  response: {}
}

const providersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.SET_PROVIDERS:
      return {
        ...state,
        providers: action.payload
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

export default providersReducer
