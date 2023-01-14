import React from 'react'
import './Feature.css'

const Feature = ({ title, description, image }) => {
  return (
    <div className='feature-container'>
        <div className="feature-image-cont">
            <img src={image} alt="" className='feature-image' />
        </div>
        <h1 className='feature-title'>{title}</h1>
        <p className='feature-p'>{description}</p>
    </div>
  )
}

export default Feature