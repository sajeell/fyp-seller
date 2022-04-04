import { Input } from 'reactstrap'
import './Components.css'

const TextArea = (props) => {
  return (
    <div className='textarea'>
      <Input type='textarea' placeholder={props.placeholder} />
    </div>
  )
}

export default TextArea
