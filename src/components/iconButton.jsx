import propTypes from 'prop-types'
import React from 'react'
const IconButton = (props) => {
    const Icon = props.icon
  return (
    <button onClick={props.onPressed} className='socials-icon-btn'>
        <Icon className = "socials-icon"></Icon>
    </button>
  )
}
IconButton.propTypes ={
    icon : propTypes.func,
    onPressed : propTypes.func
}

export default IconButton