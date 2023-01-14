import React from 'react'
import './Header.css'

import heroImg from '../../assets/hero-ui-design-book.png'
import heroAvatars from '../../assets/hero-avatars.png'
import heroStars from '../../assets/hero-stars.png'

const Header = () => {
  return (
    <div id='Header'>
      <div className="section-container header-container">
        <div className="header-left">
          <div className="header-content">
            <p className="header-tag">UI Design Book</p>
            <h1 class="header-title">UI design <del>is hard</del><br /> just got easier</h1>
            <p className="header-subtitle">Learn a logic-driven approach to design intuitive, accessible, and beautiful interfaces using quick and practical guidelines.</p>
            <div className="header-buttons">
              <a href="" className="header-button-buy">Buy the book</a>
              <a href="" className="header-button-preview">Free preview</a>
            </div>
            <div className="header-reviews">
              <img src={heroAvatars} alt="hero-avatars" className="header-reviews-avatars" />
              <div className="header-reviews-content">
                <p className="header-review-title">Loved by hundreds</p>
                <img src={heroStars} alt="hero-stars" className='header-reviews-stars' />
              </div>
            </div>
          </div>
        </div>

        <div className="header-right">
          <img width='1200' height='1048' src={heroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  )
}

export default Header