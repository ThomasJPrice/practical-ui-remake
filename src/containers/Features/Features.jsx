import React from 'react'
import { Feature } from '../../components'
import './Features.css'

import feature1 from '../../assets/feature-01.png'
import feature2 from '../../assets/feature-02.png'
import feature3 from '../../assets/feature-03.png'

const Features = () => {
  return (
    <div id='Features'>
      <div className="features-container section-container">
        <Feature 
          title='Use a system of logical guidelines, rather than just gut feeling.'
          description='Interface design might appear to be a magical art form, but a lot of it is made up from logical rules or guidelines.'
          image={feature1}
          className='features-feature'
        />
        <Feature 
          title='Much more than just making an interface look pretty.'
          description='Learn the how and why behind UI design to ensure that every design detail has a logical purpose behind it.'
          image={feature2}
          className='features-feature'
        />
        <Feature 
          title='No tedious, impractical, or vague interface design theory.'
          description='Just quick and actionable guidelines with examples and a logical rationale to help back up your design decisions.'
          image={feature3}
          className='features-feature'
        />
      </div>
    </div>
  )
}

export default Features