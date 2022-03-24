import ActionsType from '../utils/actions.type'
import axios from 'axios'

const Url = 'https://api2.sporforya.com/api'

export const setVerifications = (verification) => ({
  type: ActionsType.SET_VERIFICATION,
  payload: verification
})

export const fetchVerifications = (token) => {
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
        let temp = response.data.filter(
          (user) => user.roles.includes('provider') !== true
        )
        dispatch(setVerifications(temp))
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          console.error(err.response.data.message)
        }
      })
  }
}
