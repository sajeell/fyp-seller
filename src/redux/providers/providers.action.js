import ActionsType from '../utils/actions.type'
import axios from 'axios'

const Url = 'https://api2.sporforya.com/api'

export const setProviders = (providers) => ({
  type: ActionsType.SET_PROVIDERS,
  payload: providers
})

export const fetchProviders = (token) => {
  return (dispatch) => {
    if (token == null || token.length < 1) {
      return
    }

    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }

    axios
      .get(`${Url}/users`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        const temp = response.data.filter((user) =>
          user.roles.includes('provider')
        )
        dispatch(setProviders(temp))
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          console.error(err.response.data.message)
        }
      })
  }
}
