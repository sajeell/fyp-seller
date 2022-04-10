import ActionsType from '../utils/actions.type'
import { toast } from 'react-toastify'
import axios from 'axios'
import URL from '../../constants/constants'

const Url = URL

export const setIntermediaries = (intermediaries) => ({
  type: ActionsType.SET_INTERMEDIARIES,
  payload: intermediaries,
})

export const setAgentID = (intermediaries) => ({
  type: ActionsType.SET_AGENT_ID,
  payload: intermediaries,
})

export const fetchIntermediaries = (token) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    axios
      .get(`${Url}intermediary`, { headers: headers })
      .then((resp) => {
        let response = resp.data
        dispatch(setIntermediaries(response))
      })
      .catch((error) => {
        const err = error
        if (err.response) {
          alert(err.response.data.message)
        }
      })
  }
}

export const postIntermediary = (token, body) => {
  return (dispatch) => {
    let headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    axios
      .post(`${Url}intermediary/create`, body, { headers: headers })
      .then((resp) => {
        if (resp.status === 201) {
          toast.success('Success')
          window.location.href = '/intermediary'
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
