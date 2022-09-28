import React from 'react'

import PropTypes from 'prop-types'

import './small-event-card.css'

const SmallEventCard = (props) => {
  return (
    <div className={`small-event-card-gallery-card ${props.rootClassName}`}>
      <div className="small-event-card-container">
        <div className="small-event-card-container1">
          <div className="small-event-card-heading">
            <h2 className="small-event-card-title">{props.event.title}</h2>
          </div>
          <span className="small-event-card-text">{props.event.date}</span>
          <button className="small-event-card-button button purple-button">Connect to Event</button>
          <a
            href={props.event.link}
            target="_blank"
            rel="noreferrer noopener"
            className="small-event-card-link blue-link"
          >Find out more about the Event</a>
        </div>
      </div>
    </div>
  )
}

export default SmallEventCard
