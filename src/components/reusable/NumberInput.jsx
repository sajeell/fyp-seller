import { FormControl, InputGroup, InputGroupText } from 'react-bootstrap'

import './Components.css'

const NumberInput = (props) => {
  return (
    <div className='number-input'>
      <InputGroup className='mb-3'>
        {props.reverse === false ? <InputGroup.Text>$</InputGroup.Text> : ''}
        <FormControl
          placeholder='100'
          type='number'
          min={0}
          value={props.value}
          onChange={props.onChange}
        />
        {props.reverse === true ? <InputGroup.Text>$</InputGroup.Text> : ''}
      </InputGroup>
    </div>
  )
}

export default NumberInput
