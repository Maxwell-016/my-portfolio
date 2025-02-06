import propTypes from 'prop-types'
import React from 'react'
const IconButton = (props) => {
    const Icon = props.icon
    const url = props.url
  return (
    <button onClick={props.onPressed} className='socials-icon-btn'>
        <a href={url} target='_blanck' ><Icon className = "socials-icon"></Icon></a>
    </button>
  )
}
IconButton.propTypes ={
    icon : propTypes.func,
    onPressed : propTypes.func
}

export default IconButton