import React from 'react'

import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';


import './event-card.css'




const EventCard = (props) => {

  const navigate = useNavigate();

  function openOptions() {

  }

  function connectToEvent() {
    console.log("geht");
    navigate("/Socials/videochat");
  }

  return (
    <div className={`event-card-gallery-card ${props.rootClassName} `}>
      <div className="event-card-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="event-card-image"
        />
        <h2 className="event-card-text">{props.title}</h2>
        <button className="event-card-button button" onClick={() => connectToEvent()}>{props.button}</button>
        <span className="event-card-text1">{props.subtitle}</span>
        <a
          href={props.link_text}
          target="_blank"
          rel="noreferrer noopener"
          className="event-card-link"
        >
          {props.text}
        </a>
      </div>
      <button className="event-card-options" onClick={() => openOptions()}>
        <img className="event-card-image1"
          alt={props.image_alt1}
          src={props.image_src1}
        />
      </button>
    </div>
  )
}

EventCard.defaultProps = {
  subtitle: 'Next Event: No Date Available',
  rootClassName: '',
  image_alt1: 'image',
  link_text: 'https://example.com',
  text: 'Find out more about the Event',
  title: 'Convention',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1500',
  image_src1: './images/socials/remove.svg',
  button: 'Connect to Event',
}

EventCard.propTypes = {
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  link_text: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  button: PropTypes.string,
}

export default EventCard
