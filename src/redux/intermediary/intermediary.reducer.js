import ActionsType from './../utils/actions.type'

const INITIAL_STATE = {
  intermediaries: [],
  agentID: '',
  error: {},
  response: {},
}

const intermediaryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionsType.SET_INTERMEDIARIES:
      return {
        ...state,
        intermediaries: action.payload,
      }
    case ActionsType.SET_AGENT_ID:
      return {
        ...state,
        agentID: action.payload,
      }
    default:
      return state
  }
}

export default intermediaryReducer
