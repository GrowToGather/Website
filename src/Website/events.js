import React, { useEffect, useState } from 'react'

import { format, add } from 'date-fns'
import { WebHelper } from './wcomponents/helper'

import PHeader from './wcomponents/p-header'
import BigEventCard from './wcomponents/big-event-card'
import PFooterBG from './wcomponents/p-footer-b-g'
import Filter from './wcomponents/filter'
import WideFilter from './wcomponents/wide-filter'
import axios from 'axios';

import './events.css'
import { da } from 'date-fns/locale'

const Events = (props) => {

  /*const [state, setState] = useState({selectedMonth: Date.now(), filter: [{ 
    allActis: false, actiOpts: [{selected: false, text: "Online-Friendshipping"}, {selected: false, text: "Online-Dating"}, 
      {selected: false, text: "International Cooking"}, {selected: false, text: "Games & Movie Night"},  {selected: false, text: "Seminars"}]},
    {age: -1},
    {allLangs: false, langOpts: [{selected: false, text: "English"}, {selected: false, text: "German"}, {selected: false, text: "Spanish"}]},
    {allAreas: false, region: "", areaOpts: [{selected: false, text: "International"}, {selected: false, text: "Regional"}]}
  ]});*/

  const [state, setState] = useState({selectedMonth: Date.now(), filter: [{ allActis: false, actiOpts: []}, {age: -1}, {allLangs: false, langOpts: []},
    {allAreas: false, region: "", areaOpts: [{selected: false, text: "International"}, {selected: false, text: "Regional"}]}
  ], events: []});

  function nextMonth(dir) {
    state.selectedMonth = add(state.selectedMonth, {months: dir})
    WebHelper.getEvents(state, setState);
  }

  function updateEventSelection(filter) {
    WebHelper.getEvents({...state, filter: filter}, setState);
  }

  useEffect(() => {
    document.title = "GrowToGather";

    axios.get("https://www.73743355.xyz:23892/events/types")
    .then(response => response.data)
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.eventTypes.length; i++) {
        state.filter[0].actiOpts[i] = {selected: false, id: data.eventTypes[i].id, text: data.eventTypes[i].eventName};
      }

      for (let i = 1; i < data.languageTypes.length; i++) {
        state.filter[2].langOpts[i-1] = {selected: false, id: data.languageTypes[i].id, text: data.languageTypes[i].languageName};
      }

    var selectedDate = new Date(state.selectedMonth);
    axios.get("https://www.73743355.xyz:23892/events/calendar", { params: {"eventType": [-1], "language": [-1], "age": -1, 
      "startDate": (new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)).getTime() / 1000, 
      "endDate": (new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0)).getTime() / 1000} })

      .then(response => response.data)
      .then((data) => {
        console.log(data);
        state.events = data.events;
        setState({...state});
    });
  });

  }, []);

  return (
    <div className="events-container">
      <PHeader rootClassName="p-header-root-class-name1"></PHeader>
      <div className="events-container01">
        <WideFilter filter={state.filter} updateEventSelection={updateEventSelection} rootClassName="wide-filter-root-class-name"></WideFilter>
        <Filter filter={state.filter} updateEventSelection={updateEventSelection} rootClassName="filter-root-class-name"></Filter>
        <div className="events-container14">
          <button className="events-date-left-button button" onClick={() => nextMonth(-1)}>
            <img
              alt=""
              src="/images/website/date-prev.svg"
              className="events-date-left-arrow"
            />
          </button>
          <span className="events-date-text">{ format(new Date(state.selectedMonth), "MMM yyyy") }</span>
          <button className="events-date-right-button button" onClick={() => nextMonth(1)}>
            <img
              alt=""
              src="/images/website/date-next.svg"
              className="events-date-right-arrow"
            />
          </button>
        </div>
        {state.events.map((e, idx) => ((new Date(e.date * 1000)).getMonth() == (new Date(state.selectedMonth)).getMonth() && 
          (new Date(e.date * 1000)).getFullYear() == (new Date(state.selectedMonth)).getFullYear()) ? 
          <BigEventCard key={idx} data={e} rootClassName="big-event-card-root-class-name"></BigEventCard> : null)}

      </div>
      <PFooterBG rootClassName="p-footer-b-g-root-class-name1"></PFooterBG>
    </div>
  )
}

export default Events
