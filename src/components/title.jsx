import propTypes from 'prop-types'
import React from 'react'

const Title = (props) => {
  const id = props.id
  return (
    <div className='title-container'>
        <p className="background">{props.title}</p>
        <p id = {id} className='foreground'>{props.title}</p>
    </div>
  )
}
Title.propTypes = {
  title: propTypes.string
}

export default Title