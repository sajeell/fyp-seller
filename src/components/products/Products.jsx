import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import './Products.css'

import ViewTable from './ViewTable'
import { useEffect } from 'react'
import { fetchProducts } from '../../redux/product/user.action'

const Products = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    const sellerID = jwt_decode(token)._id
    dispatch(fetchProducts(token, sellerID))
  }, [token])

  return (
    <div className='products-wrapper'>
      <h1>Products</h1>
      <div className='table'>
        <ViewTable data={products} />
      </div>
    </div>
  )
}

export default Products
