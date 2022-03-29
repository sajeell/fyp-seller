import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'
import URL from '../../constants/constants'

const Url = URL

export const setProducts = (products) => ({
  type: ActionsType.SET_PRODUCTS,
  payload: products,
})

export const fetchProducts = (token, sellerID) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    axios
      .get(`${Url}product/by/seller/${sellerID}`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setProducts(response))
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  }
}
