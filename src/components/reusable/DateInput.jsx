import { FormControl, InputGroup } from 'react-bootstrap'

import './Components.css'

const DateInput = (props) => {
  return (
    <div className='number-input'>
      {props.error && props.error.length > 0 ? (
        <small style={{ color: '#dc3545', marginBottom: 5 }}>
          {props.error}
        </small>
      ) : (
        ''
      )}
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Starts On'
          type='date'
          value={props.value}
          onChange={props.onChange}
        />
      </InputGroup>
    </div>
  )
}

export default DateInput
