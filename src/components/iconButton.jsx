/* eslint-disable react/prop-types */
import propTypes from 'prop-types'
const IconButton = (props) => {
    const Icon = props.icon
    const url = props.url
  return (
    <button onClick={props.onPressed} className='socials-icon-btn'>
        <a href={url} target='_blank' ><Icon className = "socials-icon"></Icon></a>
    </button>
  )
}
IconButton.propTypes ={
    icon : propTypes.func,
    onPressed : propTypes.func
}

export default IconButton