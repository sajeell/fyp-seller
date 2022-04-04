import { FormControl, InputGroup, InputGroupText } from 'react-bootstrap'

import './Components.css'

const TextInput = (props) => {
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
        <FormControl
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type='text'
        />
      </InputGroup>
    </div>
  )
}

export default TextInput
