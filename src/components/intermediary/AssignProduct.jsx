import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import { HandshakeTwoTone } from '@mui/icons-material'
import { ToastContainer } from 'react-toastify'

import { fetchProducts } from '../../redux/product/user.action'
import { postIntermediary } from '../../redux/intermediary/intermediary.action'

import NumberInput from '../reusable/NumberInput'
import Button from '../reusable/Button'

import './Intermediary.css'

const AssignProduct = () => {
  const [commission, setCommission] = useState(5)
  const [commissionError, setCommissionError] = useState('')
  const [productID, setProductID] = useState('')

  const token = useSelector((state) => state.user.token)
  const agentID = useSelector((state) => state.intermediary.agentID)
  const products = useSelector((state) => state.product.products)
  const dispatch = useDispatch()

  const addIntermediaryData = () => {
    if (commission < 1) {
      setCommissionError('Field Required')
      return
    }

    if (commission > 30) {
      setCommissionError('Commission cannot be more than 30%')
      return
    }

    if (productID.length < 1) {
      alert('Error! No product selected')
      return
    }

    const body = {
      productID: productID,
      agentID: agentID,
      commission: commission,
    }

    dispatch(postIntermediary(token, body))
  }

  useEffect(() => {
    if (token) {
      const sellerID = jwt_decode(token)._id
      dispatch(fetchProducts(token, sellerID))
    }
  }, [token])

  return (
    <>
      <div className='view-table-wrapper'>
        <div className='intermediary-heading'>
          <span>Assign Product</span>
        </div>
        <ToastContainer />
        <br />
        <Row className='form-row'>
          <p className='form-label'>Commission</p>
          <NumberInput
            placeholder='Commission %'
            value={commission}
            error={commissionError}
            onChange={(e) => {
              setCommissionError('')
              setCommission(parseInt(e.target.value))
            }}
          />
        </Row>
        <Row className='form-row' style={{ marginLeft: 3 }}>
          <p className='form-label'>Assign Product</p>
          <select
            onChange={(e) => {
              setProductID(e.target.value)
            }}
          >
            <option disabled>Assign Product</option>
            {products.length > 0 ? (
              products.map((product, index) => (
                <option key={index} value={product._id}>
                  {product.title}
                </option>
              ))
            ) : (
              <option disabled>Loading...</option>
            )}
          </select>
        </Row>
        <Row className='form-row' style={{ marginLeft: -7, marginTop: 20 }}>
          <Button
            text={'Proceed To Bidding'}
            icon={<HandshakeTwoTone />}
            onClick={addIntermediaryData}
          />
        </Row>
      </div>
    </>
  )
}

export default AssignProduct
