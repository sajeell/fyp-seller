import { Input } from 'reactstrap'
import './Components.css'

const TextArea = (props) => {
  return (
    <div className='textarea'>
      {props.error && props.error.length > 0 ? (
        <small style={{ color: '#dc3545', marginBottom: 5 }}>
          {props.error}
        </small>
      ) : (
        ''
      )}
      <Input
        type='textarea'
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextArea
