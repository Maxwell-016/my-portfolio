import React from 'react'

const AnimatedCard = (props) => {
    const imageUrl = props.image;
    const altText = props.altText;
  return (
    <div className='animation-container'>
        <img className="animation" src={imageUrl} alt={altText} />
    </div>
  )
}

export default AnimatedCard