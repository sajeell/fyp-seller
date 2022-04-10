import { useEffect } from 'react'
import { Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  fetchIntermediaries,
  setAgentID,
} from '../../redux/intermediary/intermediary.action'
import './Intermediary.css'

const ViewTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)
  const agentID = useSelector((state) => state.intermediary.agentID)
  const intermediaries = useSelector(
    (state) => state.intermediary.intermediaries
  )

  const assignProduct = (id) => {
    dispatch(setAgentID(id))
    return navigate('/assign-product')
  }

  useEffect(() => {
    dispatch(fetchIntermediaries(token))
  }, [token])

  return (
    <>
      <div className='intermediary-heading'>
        <span>View</span>
      </div>
      <div className='view-table-wrapper'>
        <div className='view-table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {intermediaries.length > 0 ? (
                intermediaries.map((intermediary, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {intermediary.firstName} {intermediary.lastName}
                    </td>
                    <td>
                      <Row>
                        <Button
                          variant='outline-info'
                          style={{ borderRadius: 50 }}
                          onClick={() => assignProduct(intermediary._id)}
                        >
                          Assign Product
                        </Button>
                      </Row>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>{JSON.stringify(intermediaries)}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewTable
