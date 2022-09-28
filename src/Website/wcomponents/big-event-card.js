import React, { useState } from 'react'

import { format } from 'date-fns'

import './big-event-card.css'

const BigEventCard = (props) => {
  const [state, setState] = useState({liked: false});

  return (
    <div className={`big-event-card-container ${props.rootClassName} `}>
      <div className="big-event-card-container1">
        <span className="big-event-card-event-title">{props.data.name}</span>
        <span className="big-event-card-event-date">{ format(new Date(props.data.date * 1000), "EEEE, d MMMM yyyy") }</span>
        <span className="big-event-card-event-time">{ format(new Date(props.data.date * 1000), "HH.mm") + 
          " - " + format(new Date(props.data.endDate * 1000), "HH.mm") }</span>
        
        <div className="big-event-card-container2">
          <button className="big-event-card-event-view-details button white-button">
            View Details
          </button>
          <button className="big-event-card-connect-event-button button purple-button">
            Connect to Event
          </button>
        </div>
        <div className="big-event-card-event-down-bar">
          <button className="big-event-card-favorite-event-mobile button" onClick={() => setState({...state, liked: !state.liked})}>
            <img
              alt=""
              src={ state.liked ? "/images/shared/liked.svg" : "/images/shared/mobile-like.svg" }
              className="big-event-card-favorite-event-mobile-image"
            />
          </button>
          <button className="big-event-card-share-event-mobile-button button">
            Share this Event
          </button>
        </div>
      </div>
      <div className="big-event-card-event-right-side">
        <img
          alt=""
          src={"https://www.73743355.xyz" + props.data.imagePath}
          className="big-event-card-event-image"
        />
        <label className="big-event-card-text"></label>
        <button className="big-event-card-share-event-button button">
          Share this Event
        </button>
        <button className="big-event-card-favorite-event button" onClick={() => setState({...state, liked: !state.liked})}>
          <img
            alt=""
            src={ state.liked ? "/images/shared/liked.svg" : "/images/shared/like.svg" }
            className="big-event-card-favorite-event-image"
          />
        </button>
      </div>
    </div>
  )
}

export default BigEventCard
