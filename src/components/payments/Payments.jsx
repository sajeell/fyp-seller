import './Payments.css'

import Search from './Search'
import ViewTable from './ViewTable'

const Payments = () => {
  return (
    <div className='listings-wrapper'>
      <h1>Payments</h1>
      <div className='listings-heading'>
        <span>Search</span>
      </div>
      <div className='search'>
        <Search />
      </div>
      <div className='listings-heading'>
        <span>View</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Payments
