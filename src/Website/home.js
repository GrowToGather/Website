import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

import PHeader from './wcomponents/p-header'
import SmallEventCard from './wcomponents/small-event-card'
import TestimonialCard from './wcomponents/testimonial-card'
import PFooterBG from './wcomponents/p-footer-b-g'
import './home.css'
import axios from 'axios';

const Home = (props) => {

  const [state, setState] = useState({events: [], nextEvent: ["-", "-", "-", "-"]});

  function countDown(date) {
    var days = parseInt(date / 86400000);
    var hours = parseInt(date / 3600000) % 24;
    var minutes = parseInt(date / 60000) % 60;
    var seconds = parseInt(date / 1000) % 60;
    var nextDate = [ (days < 10 ? "0" : "") + days, (hours < 10 ? "0" : "") + hours, 
      (minutes < 10 ? "0" : "") + minutes, (seconds < 10 ? "0" : "") + seconds ];
    return nextDate;
  }

  useEffect(() => {
    var interval;

    function getEvents() {
      axios.get("https://www.73743355.xyz:23892/events/upcoming")
          .then(response => response.data)
          .then((data) => {
              if (data.length > 0) {
                interval = setInterval(() => {
                  var date = data[0].date * 1000 - Date.now();
                  setState({events: data, nextEvent: countDown(date)});
                }, 1000);
              } else {
                setState({...state, events: data});
              }
          });
    }

    document.title = "GrowToGather";
    getEvents();
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <PHeader rootClassName="p-header-root-class-name"></PHeader>
      <div className="home-home-image-carousel">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGZyaWVuZHxlbnwwfHx8fDE2NjM3OTQ2MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
          className="home-image"
        />
      </div>
      <div className="home-next-event-div">
        <span className="home-event-title">Online-Friendshipping</span>
        <div className="home-next-event-count-down">
          <div className="home-next-event-days-div">
            <span className="home-next-event-days">
              <span>{ state.nextEvent[0] }</span>
              <br></br>
            </span>
            <span className="home-text02">
              <span>Days</span>
              <br></br>
            </span>
          </div>
          <div className="home-next-event-hours-div">
            <span className="home-next-event-hours">
              <span>{ state.nextEvent[1] }</span>
              <br></br>
            </span>
            <span className="home-text07">
              <span>Hours</span>
              <br></br>
            </span>
          </div>
          <div className="home-next-event-mins-div">
            <span className="home-next-event-mins">
              <span>{ state.nextEvent[2] }</span>
              <br></br>
            </span>
            <span className="home-text12">
              <span>Mins</span>
              <br></br>
            </span>
          </div>
          <div className="home-next-event-secs-div">
            <span className="home-next-event-secs">
              <span>{ state.nextEvent[3] }</span>
              <br></br>
            </span>
            <span className="home-text17">
              <span>Secs</span>
              <br></br>
            </span>
          </div>
        </div>
        <button className="home-next-event-button button yellow-button">Go to Event</button>
      </div>
      <div className="home-upcoming-events-div">
        <span className="home-text20">
          <span>Upcoming Events</span>
          <br></br>
        </span>
        <div className="home-container1">

          <SmallEventCard event={ state.events.length > 1 ? 
            { title: state.events[1].name, date: format(new Date(state.events[1].date * 1000), "E do MMMM"), link: state.events[1].link} : 
            { title: "No further Event", date: "No Date Available",link: ""}} 
            rootClassName="small-event-card-root-class-name"></SmallEventCard>

          <SmallEventCard event={ state.events.length > 2 ? 
            { title: state.events[2].name, date: format(new Date(state.events[2].date * 1000), "E do MMMM"), link: state.events[2].link} : 
            { title: "No further Event", date: "No Date Available",link: ""}} 
            rootClassName="small-event-card-root-class-name1"></SmallEventCard>
          <SmallEventCard event={ state.events.length > 3 ? 
            { title: state.events[3].name, date: format(new Date(state.events[3].date * 1000), "E do MMMM"), link: state.events[3].link} : 
            { title: "No further Event", date: "No Date Available",link: ""}} 
            rootClassName="small-event-card-root-class-name2"></SmallEventCard>
        </div>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          className="home-upcoming-events-more-events gray-link"
        >
          Show More Events
        </a>
      </div>
      <div className="home-vision-div">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1663698789638-e1defb8ed16c?ixid=Mnw5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjYzNzk0NDc0&amp;ixlib=rb-1.2.1&amp;w=1500"
          className="home-vision-image"
        />
        <div className="home-container2">
          <span className="home-text23">
            <span>The Vision</span>
            <br></br>
          </span>
          <span className="home-vision-text">
            Our goal is to connect YOU with other young adults from all over the
            world! We want to introduce you to other cultures and through
            organising a variety of different activities create opportunities
            for you to find new friends.
          </span>
          <button className="home-vision-more-button button yellow-button">
            Find out More
          </button>
        </div>
      </div>
      <div className="home-testimonial-div">
        <div className="home-container3">
          <h1 className="home-text26">
            <span>Testimonials</span>
            <br></br>
          </h1>
          <div className="home-container4">
            <TestimonialCard
              picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></TestimonialCard>
            <TestimonialCard rootClassName="rootClassName"></TestimonialCard>
            <TestimonialCard
              picture_src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></TestimonialCard>
          </div>
        </div>
      </div>
      <PFooterBG rootClassName="p-footer-b-g-root-class-name"></PFooterBG>
    </div>
  )
}

export default Home
