import './Users.css';

const ViewTable = () => {
  return (
    <>
      <div className='search-wrapper'>
        <div className='input'>
          <input type='text' placeholder='ID' />
        </div>
        <div className='input'>
          <input type='text' placeholder='Name' />
        </div>
        <div className='input'>
          <select>
            <option>Status</option>
            <option value='online' defaultChecked>
              Online
            </option>
            <option value='offline'>Offline</option>
          </select>
        </div>
        <div className='input'>
          <select>
            <option>Provider Type</option>
            <option value='individual' defaultChecked>
              Individual
            </option>
            <option value='organization'>Organization</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className='button'>Search</div>
        &nbsp; &nbsp; &nbsp;
        <div className='button'>Reset</div>
      </div>
      <br />
      <br />
      <div className='listings-heading'>
        <span>View</span>
      </div>
      <br />

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
              <tr>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewTable;
