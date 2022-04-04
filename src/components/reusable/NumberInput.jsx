import { FormControl, InputGroup, InputGroupText } from 'react-bootstrap'

import './Components.css'

const NumberInput = (props) => {
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
        {props.reverse === false ? <InputGroup.Text>$</InputGroup.Text> : ''}
        <FormControl
          placeholder='100'
          type='number'
          min={5}
          value={props.value}
          onChange={props.onChange}
        />
        {props.reverse === true ? <InputGroup.Text>$</InputGroup.Text> : ''}
      </InputGroup>
    </div>
  )
}

export default NumberInput
