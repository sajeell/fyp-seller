import ActionsType from '../utils/actions.type'
import axios from 'axios'

const Url = 'https://api2.sporforya.com/api'

export const setListings = (listing) => ({
  type: ActionsType.SET_LISTINGS,
  payload: listing
})

export const fetchListings = (token) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }

    axios
      .get(`${Url}/listing/lists`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setListings(response.data))
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          console.error(err.response.data.message)
        }
      })
  }
}
