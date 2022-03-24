import './Users.css'

import Search from './Search'
import ViewTable from './ViewTable'

const Users = () => {
  return (
    <div className='listings-wrapper'>
      <h1>Users</h1>
      <div className='listings-heading'>
        <span>Search</span>
      </div>
      <div className='table'>
        <ViewTable />
      </div>
    </div>
  )
}

export default Users
