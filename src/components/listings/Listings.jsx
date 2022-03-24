import './Listings.css'

import Search from './Search'
import ViewTable from './ViewTable'

const Listings = () => {
  return (
    <div className='listings-wrapper'>
      <h1>Listings</h1>
      <div className='listings-heading'>
        <span>Search</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Listings
