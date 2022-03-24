import './Payments.css'

const ViewTable = () => {
  return (
    <div className='view-table-wrapper'>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Bus</th>
              <th>Status</th>
              <th>Email</th>
              <th>City</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sajeel</td>
              <td>Volvo MK-123</td>
              <td id='active-status'>Active</td>
              <td>abc@abc.com</td>
              <td>New York</td>
              <td>09/13/2021</td>
              <div className='action-wrapper'>
                <td className='view-button'>View</td>
                <td className='edit-button'>Edit</td>
                <td className='delete-button'>Delete</td>
              </div>
            </tr>
            <tr>
              <td>2</td>
              <td>David</td>
              <td>Daewoo MK-123</td>
              <td id='inactive-status'>Active</td>
              <td>efg@abc.com</td>
              <td>Brooklyn</td>
              <td>10/13/2021</td>
              <div className='action-wrapper'>
                <td className='view-button'>View</td>
                <td className='edit-button'>Edit</td>
                <td className='delete-button'>Delete</td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewTable
