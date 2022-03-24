import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSVLink } from 'react-csv'
import {
  fetchListings,
  setListings
} from '../../redux/listings/listings.action'
import './Listings.css'

const ViewTable = () => {
  const token = useSelector((state) => state.user.token)
  let listings = useSelector((state) => state.listings.listings)
  const dispatch = useDispatch()

  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [rating, setRating] = useState('')

  const search = () => {
    if (id.length > 0) {
      listings = listings.filter((listing) => listing._id.includes(id) === 1)
    }

    if (title.length > 0) {
      listings = listings.filter((listing) => listing.title === title)
    }

    if (rating.length > 0) {
      listings = listings.filter((listing) => listing.avgRating === rating)
    }

    if (type.length > 0) {
      listings = listings.filter((listing) => listing.listingType === type)
    }

    dispatch(setListings(listings))
  }

  const reset = () => {
    setId('')
    setTitle('')
    setRating('')
    setType('')
    dispatch(fetchListings(token))
  }

  const headers = [
    { label: 'ID', key: '_id' },
    { label: 'Title', key: 'title' },
    { label: 'Type', key: 'listingType' },
    { label: 'Rating', key: 'avgRating' },
    { label: 'Location', key: 'location.shortName' }
  ]

  useEffect(() => {
    dispatch(fetchListings(token))
    console.log(listings)
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
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='input'>
          <select onChange={(e) => setType(e.target.value)}>
            <option>Type</option>
            <option value='Service' defaultChecked>
              Service
            </option>
            <option value='Facility'>Facility</option>
            <option value='Event'>Event</option>
          </select>
        </div>
        <div className='input'>
          <select onChange={(e) => setRating(e.target.value)}>
            <option>Provider Type</option>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
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
        data={listings}
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
                <th>Title</th>
                <th>Type</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {listings
                ? listings.map((listing, index) => (
                    <tr key={listing._id}>
                      <td>{index + 1}</td>
                      <td>{listing._id}</td>
                      <td>{listing.title}</td>
                      <td>{listing.listingType}</td>
                      <td>{listing.avgRating}</td>
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
