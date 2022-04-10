import { useEffect } from 'react'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Products.css'

const ViewTable = (props) => {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const convertToNormalDate = (dateArg) => {
    const date = new Date(dateArg)

    return `${date.getDate()} ${month[date.getMonth()]},${date.getFullYear()}`
  }

  useEffect(() => {
    console.log(props.data)
  }, [props.data])
  return (
    <>
      <div className='products-heading'>
        <span>View</span>
      </div>
      <div className='view-table-wrapper'>
        <Link to='/add-product'>
          <div className='add'>
            <span>+ add</span>
          </div>
        </Link>
        <div className='view-table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.data && props.data.length > 0
                ? props.data.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product._id}</td>
                      <td>{product.title}</td>
                      <td>{product.category}</td>
                      <td>{product.stock}</td>
                      <td>{convertToNormalDate(product.createdAt)}</td>
                      <td>
                        <Row>
                          <Button
                            variant='outline-info'
                            style={{ borderRadius: 50 }}
                          >
                            View Details
                          </Button>
                        </Row>
                      </td>
                    </tr>
                  ))
                : ''}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewTable
