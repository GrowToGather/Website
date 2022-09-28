import React from 'react'

import PropTypes from 'prop-types'
import { Link, useNavigate } from "react-router-dom"

import VLine from '../../shared/v-line'
import './p-header.css'

const PHeader = (props) => {
  const [showMobileNav, setShowMobileNav] = React.useState(false)
  const navigate = useNavigate();


  function setShowMobile(show) {
    setShowMobileNav(show);
  }

  return (
    <header
      data-role="Header"
      className={`p-header-header ${props.rootClassName} `}
    >
      <div className="p-header-container">
        <img
          alt={props.image_alt}
          src="/images/logo.webp"
          className="p-header-navbar-home-image"
        />
        <span className="p-header-text">{props.text5}</span>
      </div>
      <div className="p-header-nav">
        <Link to='/' className="black-link"><span className="p-header-navbar-home-link">Home</span></Link>
        <Link to='/events' className="black-link"><span className="p-header-navbar-events-link">Events</span></Link>
        <Link to='/about' className="black-link"><span className="p-header-navbar-about-link">About</span></Link>
        <Link to='/contact' className="black-link"><span className="p-header-navbar-contact-link">Contact</span></Link>
        <Link to='/socials' className="purple-link"><span className="p-header-navbar-socials-link">Socials App</span></Link>
      </div>


      <button className="p-header-burger-menu" onClick={() => setShowMobile(!showMobileNav)}><img src="/images/menu.svg" width="40px"/></button>

      <div data-type="BurgerMenu" className="p-header-burger-menu">
        
      </div>
      { showMobileNav ?
        <div data-type="MobileMenu" className="p-header-mobile-menu">
          <div className="p-header-container1">
          <Link to='/' className="black-link p-header-navbar-home-mobile-div">
            <span className="p-header-navbar-home-mobile-link">Home</span></Link>
          </div>
          <VLine rootClassName="v-line-root-class-name1" className=""></VLine>
          <div className="p-header-container2">
            <Link to='/about' className="black-link p-header-navbar-about-mobile-div">
              <span className="p-header-navbar-about-mobile-link">About</span></Link>
          </div>
          <VLine rootClassName="v-line-root-class-name2" className=""></VLine>
          <div className="p-header-container3">
            <Link to='/contact' className="black-link p-header-navbar-contact-mobile-div">
              <span className="p-header-navbar-contact-mobile-link">Contact</span></Link>
          </div>
        </div>
       : null }
    </header>
  )
}

PHeader.defaultProps = {
  text2: 'About',
  text1: 'Events',
  text3: 'Contact',
  text7: 'About',
  text6: 'Home',
  image_alt: 'logo',
  text8: 'Contact',
  image_src:
    'https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM5fHxjaXJjbGV8ZW58MHx8fHwxNjYzODQxMTYw&ixlib=rb-1.2.1&w=200',
  rootClassName: '',
  text: 'Home',
  text5: 'GrowToGather',
  text4: 'Socials App',
}

PHeader.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  image_alt: PropTypes.string,
  text8: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
}

export default PHeader
