import { InputGroup } from 'react-bootstrap'

import './Components.css'

const DropdownInput = (props) => {
  return (
    <div className='number-input'>
      {props.error && props.error.length > 0 ? (
        <small style={{ color: '#dc3545', marginBottom: 5 }}>
          {props.error}
        </small>
      ) : (
        ''
      )}
      <InputGroup>
        <select
          onChange={props.onChange}
          placeholder={props.placeholder}
          title={props.placeholder}
        >
          <option disabled>Category</option>
          {props.options
            ? props.options.length > 0
              ? props.options.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))
              : ''
            : ''}
        </select>
      </InputGroup>
    </div>
  )
}

export default DropdownInput
