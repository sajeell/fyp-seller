import { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import './Components.css'

const DropdownMenu = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.title)
  return (
    <div className='dropdown-component mt-3'>
      <DropdownButton id='dropdown-basic-button' title={selectedValue}>
        {props.options && props.options.length > 0 ? (
          props.options.map((option, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => {
                setSelectedValue(option)
              }}
            >
              {option}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>Loading...</Dropdown.Item>
        )}
      </DropdownButton>
    </div>
  )
}

export default DropdownMenu
