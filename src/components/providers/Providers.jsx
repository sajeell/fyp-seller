import './Providers.css'

import Search from './Search'
import ViewTable from './ViewTable'

const Providers = () => {
  return (
    <div className='listings-wrapper'>
      <h1>Providers</h1>
      <div className='listings-heading'>
        <span>Search</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Providers
