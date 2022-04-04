import { Button as ButtonBootstrap } from 'react-bootstrap'

import './Components.css'

const Button = (props) => {
  return (
    <div className='button-component'>
      <ButtonBootstrap
        className='page-button'
        color='#707070'
        onClick={props.onClick}
      >
        {props.text} {props.icon ? props.icon : ''}
      </ButtonBootstrap>
    </div>
  )
}

export default Button
