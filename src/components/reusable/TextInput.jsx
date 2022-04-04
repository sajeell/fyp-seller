import { FormControl, InputGroup, InputGroupText } from 'react-bootstrap'

import './Components.css'

const TextInput = (props) => {
  return (
    <div className='number-input'>
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
