import React from 'react'

import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to='/' className="white-link"><span className="navigation-links-text">{props.text}</span></Link>
      <Link to='/events' className="white-link"><span className="navigation-links-text1">{props.text1}</span></Link>
      <Link to='/about' className="white-link"><span className="navigation-links-text2">{props.text2}</span></Link>
      <Link to='/contact' className="white-link"><span className="navigation-links-text3">{props.text3}</span></Link>
      <Link to='/socials' className="yellow-link"><span className="navigation-links-text4">{props.text4}</span></Link>
    </nav>
  )
}

export default NavigationLinks
