import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'
import URL from '../../constants/constants'

const Url = URL

export const setProducts = (products) => ({
  type: ActionsType.SET_PRODUCTS,
  payload: products,
})

export const setProductID = (id) => ({
  type: ActionsType.SET_PRODUCT_ID,
  payload: id,
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

export const postProduct = (token, data) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    axios
      .post(`${Url}product`, data, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setProducts(response))
        dispatch(setProductID(response._id))
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  }
}

export const postBiddingDetails = (token, data) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    axios
      .post(`${Url}bidding/add`, data, { headers: headers })
      .then((resp) => {
        if (resp.status === 201 || resp.status === 200) {
          toast.success('Success')
        }
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  }
}
