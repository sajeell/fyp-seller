import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import {
  fetchProviders,
  setProviders
} from '../../redux/providers/providers.action'

import './Providers.css'

const ViewTable = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  let providers = useSelector((state) => state.providers.providers)

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [online, setOnline] = useState('')
  const [type, setType] = useState('')

  const search = () => {
    if (id.length > 0) {
      providers = providers.filter((user) => user._id.includes(id) === 1)
    }

    if (name.length > 0) {
      providers = providers.filter((user) =>
        user.firstName
          ? user.firstName === name
          : user.Profile.name === name
          ? user.Profile.name === name
          : user.email.includes === name
      )
    }

    if (online.length > 0) {
      providers = providers.filter(
        (user) => user.isOnline === (online === 'online' ? true : false)
      )
    }

    if (type.length > 0) {
      providers = providers.filter((user) => user.Profile.providerType === type)
    }

    dispatch(setProviders(providers))
  }

  const reset = () => {
    setId('')
    setName('')
    setOnline('')
    setType('')
    dispatch(fetchProviders(token))
  }

  const headers = [
    { label: 'ID', key: '_id' },
    { label: 'First Name', key: 'firstName' },
    { label: 'Last Name', key: 'lastName' },
    { label: 'Name', key: 'Profile.name' },
    { label: 'Email', key: 'email' },
    { label: 'Provider Type', key: 'Profile.providerType' },
    { label: 'Created At', key: 'createdAt' }
  ]

  useEffect(() => {
    dispatch(fetchProviders(token))
  }, [token])

  return (
    <>
      <div className='search-wrapper'>
        <div className='input'>
          <input
            type='text'
            placeholder='ID'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className='input'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input'>
          <select onChange={(e) => setOnline(e.target.value)}>
            <option>Status</option>
            <option value='online' defaultChecked>
              Online
            </option>
            <option value='offline'>Offline</option>
          </select>
        </div>
        <div className='input'>
          <select onChange={(e) => setType(e.target.value)}>
            <option>Provider Type</option>
            <option value='individual' defaultChecked>
              Individual
            </option>
            <option value='organization'>Organization</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className='button' onClick={search}>
          Search
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className='button' onClick={reset}>
          Reset
        </div>
      </div>
      <br />
      <br />
      <div className='listings-heading'>
        <span>View</span>
      </div>
      <br />
      <CSVLink
        data={providers}
        headers={headers}
        filename='Sporforya_Providers'
        onTimeUpdate={true}
      >
        Download CSV
      </CSVLink>
      <br />
      <br />
      <div className='view-table-wrapper'>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>S. #</th>
                <th>ID</th>
                <th>Name</th>
                <th>Online</th>
                <th>Email</th>
                <th>Provider Type</th>
                <th>Joining Date</th>
              </tr>
            </thead>
            <tbody>
              {providers
                ? providers.map((provider, index) => (
                    <tr key={provider._id}>
                      <td>{index + 1}</td>
                      <td>{provider._id}</td>
                      <td>
                        {provider.firstName
                          ? provider.firstName + ' ' + provider.lastName
                          : provider.Profile.name}
                      </td>
                      <td
                        id={
                          provider.isOnline == true
                            ? 'active-status'
                            : 'inactive-status'
                        }
                      >
                        {provider.isOnline ? 'Online' : 'Offline'}
                      </td>
                      <td>{provider.email}</td>
                      <td>{provider.Profile.providerType}</td>
                      <td>{provider.createdAt}</td>
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
