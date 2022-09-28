import React, { useState } from 'react'

import './wide-filter.css'
import axios from 'axios';

const WideFilter = (props) => {

  const [state, setState] = useState({openActivity: false, actiFilterText: "Filter", openArea: false, areaFilterText: "Filter",
    openLanguage: false, langFilterText: "Filter", filter: props.filter});

    function selectAll(selectedAll, pos, selection, allButton, filterText) {
        for (let i = 0; i < state.filter[pos][selection].length; i++) {
          state.filter[pos][selection][i].selected = selectedAll;
        }
        state.filter[pos][allButton] = selectedAll;

        if (selectedAll) {
          state[filterText] = "Filter (" + state.filter[pos][selection].length + ")";
        } else {
          state[filterText] = "Filter (0)";
        }
        props.updateEventSelection(state.filter);
    }

    function selectOption(idx, pos, selected, selection, allButton, filterText) {
        state.filter[pos][selection][idx].selected = selected;
        var selectAmount = 0;
        for (let i = 0; i < state.filter[pos][selection].length; i++) {
          if (state.filter[pos][selection][i].selected) {
            selectAmount++;
          }
        }
        if (selectAmount == state.filter[pos][selection].length) {
          state.filter[pos][allButton] = true
        } else {
          state.filter[pos][allButton] = false;
        }
        state[filterText] = "Filter (" + selectAmount + ")";
        props.updateEventSelection(state.filter);
    }

    function updateAge(event) {
        state.filter[1].age = event.target.value;
        props.updateEventSelection(state.filter);
    }

  return (
    <div className="wide-filter-container">
      <div className="wide-filter-wide-search-bar">
        <label className="wide-filter-text"></label>
        <label className="wide-filter-text01"></label>
        <div className="wide-filter-container1">
          <span className="wide-filter-text02">Activity</span>
          {!state.openActivity ? <button className="wide-filter-closed-select button" onClick={() => setState({...state, openActivity: true})}>
            <span className="wide-filter-closed-select-text">{state.actiFilterText}</span>
            <img
              alt=""
              src="/images/website/down-icon.svg"
              className="wide-filter-closed-select-icon"
            />
          </button> :
          <div className="wide-filter-open-select">
            <button className="wide-filter-button button" onClick={() => setState({...state, openActivity: false})}>
              <span className="wide-filter-open-select-text">{state.actiFilterText}</span>
              <img
                alt=""
                src="/images/website/up-icon.svg"
                className="wide-filter-open-select-icon"
              />
            </button>
            <button className="wide-filter-button1 button" onClick={() => selectAll(!state.filter[0].allActis, 0, "actiOpts", "allActis", "actiFilterText")}>
                <img
                    alt=""
                    src={state.filter[0].allActis ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                    className="wide-filter-image"
                />
                <span className="wide-filter-text03">All</span>
            </button>
            {state.filter.length > 0 ? state.filter[0].actiOpts.map((option, idx) => 
              <div key={idx}>
                <button className="wide-filter-button1 button" onClick={() => selectOption(idx, 0, !option.selected, "actiOpts", "allActis", "actiFilterText")}>
                <img
                    alt=""
                    src={option.selected ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                    className="wide-filter-image"
                />
                <span className="wide-filter-text03">{option.text}</span>
                </button>
              </div>
            ) : null}
          </div> }
        </div>
        <div className="wide-filter-container2">
          <span className="wide-filter-text04">Area</span>
          {!state.openArea ? <button className="wide-filter-closed-select button" onClick={() => setState({...state, openArea: true})}>
            <span className="wide-filter-closed-select-text">{state.areaFilterText}</span>
            <img
              alt=""
              src="/images/website/down-icon.svg"
              className="wide-filter-closed-select-icon"
            />
          </button> :
          <div className="wide-filter-open-select1">
            <button className="wide-filter-button button" onClick={() => setState({...state, openArea: false})}>
              <span className="wide-filter-open-select-text">{state.areaFilterText}</span>
              <img
                alt=""
                src="/images/website/up-icon.svg"
                className="wide-filter-open-select-icon"
              />
            </button>
            <button className="wide-filter-button1 button" onClick={() => selectAll(!state.filter[3].allAreas, 3, "areaOpts", "allAreas", "areaFilterText")}>
                <img
                    alt=""
                    src={state.filter[3].allAreas ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                    className="wide-filter-image"
                />
                <span className="wide-filter-text03">All</span>
            </button>
            {state.filter.length > 0 ? state.filter[3].areaOpts.map((option, idx) => 
              <div key={idx}>
                <button className="wide-filter-button1 button" onClick={() => selectOption(idx, 3, !option.selected, "areaOpts", "allAreas", "areaFilterText")}>
                <img
                    alt=""
                    src={option.selected ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                    className="wide-filter-image"
                />
                <span className="wide-filter-text03">{option.text}</span>
                </button>
              </div>
            ) : null}
            <div className="wide-filter-container3">
              <button className="wide-filter-area-button button">
                <img
                  alt=""
                  src="/images/website/location.svg"
                  className="wide-filter-area-icon"
                />
              </button>
              <span className="wide-filter-text06">Location</span>
            </div>
          </div>}
        </div>
        <div className="wide-filter-container4">
          <span className="wide-filter-text07">Language</span>
          {!state.openLanguage ? <button className="wide-filter-closed-select button" onClick={() => setState({...state, openLanguage: true})}>
            <span className="wide-filter-closed-select-text">{state.langFilterText}</span>
            <img
              alt=""
              src="/images/website/down-icon.svg"
              className="wide-filter-closed-select-icon"
            />
          </button> :
          <div className="wide-filter-open-select2">
            <button className="wide-filter-button button" onClick={() => setState({...state, openLanguage: false})}>
              <span className="wide-filter-open-select-text">{state.langFilterText}</span>
              <img
                alt=""
                src="/images/website/up-icon.svg"
                className="wide-filter-open-select-icon"
              />
            </button>
            <button className="wide-filter-button1 button" onClick={() => selectAll(!state.filter[2].allLangs, 2, "langOpts", "allLangs", "langFilterText")}>
                <img
                    alt=""
                    src={state.filter[2].allLangs ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                    className="wide-filter-image"
                />
                <span className="wide-filter-text03">All</span>
            </button>
            {state.filter.length > 0 ? state.filter[2].langOpts.map((option, idx) => 
              <div key={idx}>
                <button className="wide-filter-button1 button" onClick={() => selectOption(idx, 2, !option.selected, "langOpts", "allLangs", "langFilterText")}>
                <img
                    alt=""
                    src={option.selected ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                    className="wide-filter-image"
                />
                <span className="wide-filter-text03">{option.text}</span>
                </button>
              </div>
            ) : null}
          </div>}
        </div>
        <div className="wide-filter-container5">
          <span className="wide-filter-text09">Age</span>
          <input
            type="number"
            placeholder="18"
            className="wide-filter-textinput input"
            onChange={(e) => updateAge(e)}
          />
        </div>
      </div>
    </div>
  )
}
  
export default WideFilter
