import { Upload, UploadFile, UploadOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import ImageUploadService from '../../services/ImageUpload/ImageUploadService'
import Button from '../reusable/Button'
import DateInput from '../reusable/DateInput'
import NumberInput from '../reusable/NumberInput'
import TextArea from '../reusable/TextArea'
import TextInput from '../reusable/TextInput'
import './Products.css'

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [stock, setStock] = useState('')
  const [stockError, setStockError] = useState('')
  const [startsOn, setStartsOn] = useState('')
  const [startsOnError, setStartsOnError] = useState('')
  const [images, setImages] = useState([])

  useEffect(() => {
    console.log(images)
  }, [images])
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
            onChange={(e) => setTitle(e.target.value)}
          />
        </Row>
        <Row className='form-row'>
          <TextArea
            placeholder='Product Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          <p className='form-label'>Stock</p>
          <NumberInput
            placeholder='Stock'
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Row>
      </Form>
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
            onChange={(e) => setStartsOn(e.target.value)}
          />
        </Row>
        <Row className='form-row'>
          <p className='form-label'>Increment Price</p>
          <NumberInput
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Row>
        <Row className='form-row'>
          <p className='form-label'>Minimum Price</p>
          <NumberInput
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Row>
        <Row className='form-row'>
          <p className='form-label'>Duration (seconds)</p>
          <NumberInput
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Row>
        <Row className='form-row'>
          <Button text={'Submit Form'} icon={<Upload />} />
        </Row>
      </Form>
    </div>
  )
}

export default AddProduct
