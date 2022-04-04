import { ArrowRight, Upload } from '@mui/icons-material'
import { useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'

import {
  postProduct,
  postBiddingDetails,
  setProductID,
  setProducts,
} from '../../redux/product/user.action'

import ImageUploadService from '../../services/ImageUpload/ImageUploadService'
import Button from '../reusable/Button'
import DateInput from '../reusable/DateInput'
import NumberInput from '../reusable/NumberInput'
import TextArea from '../reusable/TextArea'
import TextInput from '../reusable/TextInput'

import './Products.css'
import DropdownInput from '../reusable/DropdownInput'

const AddProduct = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const productID = useSelector((state) => state.product.productID)

  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [stock, setStock] = useState('')
  const [stockError, setStockError] = useState('')
  const [category, setCategory] = useState('Antique')
  const [categoryError, setCategoryError] = useState('')
  const [startsOn, setStartsOn] = useState('')
  const [startsOnError, setStartsOnError] = useState('')
  const [incrementPrice, setIncrementPrice] = useState('')
  const [incrementPriceError, setIncrementPriceError] = useState('')
  const [minimumPrice, setMinimumPrice] = useState('')
  const [minimumPriceError, setMinimumPriceError] = useState('')
  const [duration, setDuration] = useState('')
  const [durationError, setDurationError] = useState('')
  const [images, setImages] = useState([])

  const postProductAPI = () => {
    const userID = jwt_decode(token)._id

    if (title.length < 1) {
      setTitleError('Required field')
      return
    }

    if (description.length < 1) {
      setDescriptionError('Required field')
      return
    }

    if (category.length < 1) {
      setCategoryError('Required field')
      return
    }

    if (stock.length < 1) {
      setStockError('Required field')
      return
    }

    const body = {
      title: title,
      description: description,
      category: category,
      featured: false,
      sellerID: userID,
      images: images,
      stock: parseInt(stock),
    }

    dispatch(postProduct(token, body))
  }

  const postBiddingAPI = () => {
    if (startsOn.length < 1) {
      setStartsOnError('Required field')
      return
    }

    if (incrementPrice.length < 1) {
      setIncrementPriceError('Required field')
      return
    }

    if (minimumPrice.length < 1) {
      minimumPriceError('Required field')
      return
    }

    if (duration.length < 1) {
      setDurationError('Required field')
      return
    }

    const body = {
      startsOn: startsOn,
      incrementPrice: parseFloat(incrementPrice),
      minPrice: parseFloat(minimumPrice),
      duration: parseInt(duration),
      productID: productID,
    }

    dispatch(postBiddingDetails(token, body))

    dispatch(setProducts(null))
    dispatch(setProductID(null))

    setTitle('')
    setDescription('')
    setImages([])
    setStock('')
  }

  return (
    <div className='addproduct-wrapper'>
      <h4>Add Product</h4>
      <div className='margin-empty-div'></div>
      <div className='products-heading'>
        <span>Product Details</span>
      </div>
      <div className='margin-empty-div'></div>
      <Form autoSave='true' className='addproduct-form'>
        <Row className='form-row'>
          <TextInput
            placeholder='Product Name'
            value={title}
            error={titleError}
            onChange={(e) => {
              setTitleError('')
              setTitle(e.target.value)
            }}
          />
        </Row>
        <Row className='form-row'>
          <TextArea
            placeholder='Product Description'
            value={description}
            error={descriptionError}
            onChange={(e) => {
              setDescriptionError('')
              setDescription(e.target.value)
            }}
          />
        </Row>
        <Row className='form-row'>
          <ImageUploadService
            onUpload={(path) => {
              let tempArray = images
              tempArray.push(path)
              setImages(tempArray)
            }}
          />
        </Row>
        <Row className='form-row'>
          <p className='form-label'>Category</p>
          <DropdownInput
            placeholder='Category'
            value={category}
            error={categoryError}
            options={['Antique', 'Handmade']}
            onChange={(e) => {
              setCategoryError('')
              setCategory(e.target.value)
            }}
          />
        </Row>
        <Row className='form-row'>
          <p className='form-label'>Stock</p>
          <NumberInput
            placeholder='Stock'
            value={stock}
            error={stockError}
            onChange={(e) => {
              setStockError('')
              setStock(e.target.value)
            }}
          />
        </Row>
        <Row className='form-row'>
          <Button
            text={'Proceed To Bidding'}
            icon={<ArrowRight />}
            onClick={postProductAPI}
          />
        </Row>
      </Form>
      {productID ? (
        productID.length > 0 ? (
          <>
            <div className='margin-empty-div'></div>
            <div className='products-heading'>
              <span>Bidding Details</span>
            </div>
            <Form>
              <div className='margin-empty-div'></div>
              <Row className='form-row'>
                <p className='form-label'>Starts On</p>
                <DateInput
                  value={startsOn}
                  error={startsOnError}
                  onChange={(e) => {
                    setStartsOnError('')
                    setStartsOn(e.target.value)
                  }}
                />
              </Row>
              <Row className='form-row'>
                <p className='form-label'>Increment Price</p>
                <NumberInput
                  value={incrementPrice}
                  error={incrementPriceError}
                  onChange={(e) => {
                    setIncrementPriceError('')
                    setIncrementPrice(e.target.value)
                  }}
                />
              </Row>
              <Row className='form-row'>
                <p className='form-label'>Minimum Price</p>
                <NumberInput
                  value={minimumPrice}
                  error={minimumPriceError}
                  onChange={(e) => {
                    setMinimumPriceError('')
                    setMinimumPrice(e.target.value)
                  }}
                />
              </Row>
              <Row className='form-row'>
                <p className='form-label'>Duration (seconds)</p>
                <NumberInput
                  value={duration}
                  error={durationError}
                  onChange={(e) => {
                    setDurationError('')
                    setDuration(e.target.value)
                  }}
                />
              </Row>
              <Row className='form-row'>
                <Button
                  text={'Submit Form'}
                  icon={<Upload />}
                  onClick={postBiddingAPI}
                />
              </Row>
            </Form>
          </>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </div>
  )
}

export default AddProduct
