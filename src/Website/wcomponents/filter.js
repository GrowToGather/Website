import React, { useState } from 'react'
import './filter.css'

const Filter = (props) => {

  const [state, setState] = useState({openFilter: false, filter: props.filter});

    function selectAll(selectedAll, pos, selection, allButton) {
        for (let i = 0; i < state.filter[pos][selection].length; i++) {
          state.filter[pos][selection][i].selected = selectedAll;
        }
        state.filter[pos][allButton] = selectedAll;
        setState({...state});
    }

    function selectOption(idx, pos, selected, selection, allButton) {
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
        setState({...state});
      }

    function updateAge(event) {
        state.filter[1].age = event.target.value;
        setState({...state});
    }

  return (
    <div className="events-container06">
        { state.openFilter ? 
        <div className="events-container07">
            <span className="events-text06">Activity</span>
            <button className="events-button button" onClick={() => selectAll(!state.filter[0].allActis, 0, "actiOpts", "allActis")}>
                <img
                    alt="image"
                    src={state.filter[0].allActis ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                    className="events-image"
                />
                <span className="events-text07">All</span>
            </button>
            { state.filter[0].actiOpts.map((option, idx) => 
                <button key={idx} className="events-button button" onClick={() => selectOption(idx, 0, !option.selected, "actiOpts", "allActis")}>
                    <img
                        alt="image"
                        src={option.selected ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                        className="events-image"
                    />
                    <span className="events-text07">{option.text}</span>
                </button>
            )}
            <span className="events-text09">Language</span>
            <div className="events-container08">
                <div className="events-container09">
                    <button className="events-button button" onClick={() => selectAll(!state.filter[2].allLangs, 2, "langOpts", "allLangs")}>
                        <img
                            alt="image"
                            src={state.filter[2].allLangs ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                            className="events-image"
                        />
                        <span className="events-text07">All</span>
                    </button>
                    { state.filter[2].langOpts.map((option, idx) => idx < parseInt(state.filter[2].langOpts.length / 2) ?
                        <button key={idx} className="events-button button" onClick={() => selectOption(idx, 2, !option.selected, "langOpts", "allLangs")}>
                            <img
                                alt="image"
                                src={option.selected ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                                className="events-image"
                            />
                            <span className="events-text07">{option.text}</span>
                        </button> : null
                    )}
                </div>
                <div className="events-container10">
                    { state.filter[2].langOpts.map((option, idx) => idx >= parseInt(state.filter[2].langOpts.length / 2) ?
                        <button key={idx} className="events-button button" onClick={() => selectOption(idx, 2, !option.selected, "langOpts", "allLangs")}>
                            <img
                                alt="image"
                                src={option.selected ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                                className="events-image"
                            />
                            <span className="events-text07">{option.text}</span>
                        </button> : null
                    )}
                </div>
            </div>
            <span className="events-text14">Age</span>
            <div className="events-container11">
                <div className="events-container12">
                <input
                    type="number"
                    placeholder="18"
                    className="events-filter-textinput input"
                    onChange={(e) => updateAge(e)}
                />
                </div>
                <div className="events-container13">

                </div>
            </div>
            <span className="events-text21">Area</span>
            <button className="events-button button" onClick={() => selectAll(!state.filter[3].allAreas, 3, "areaOpts", "allAreas")}>
                <img
                    alt="image"
                    src={state.filter[3].allAreas ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                    className="events-image"
                />
                <span className="events-text07">All</span>
            </button>
            { state.filter[3].areaOpts.map((option, idx) => 
                <button key={idx} className="events-button button" onClick={() => selectOption(idx, 3, !option.selected, "areaOpts", "allAreas")}>
                    <img
                        alt="image"
                        src={option.selected ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                        className="events-image"
                    />
                    <span className="events-text07">{option.text}</span>
                </button>
            )}
            <div className="filter-container3">
              <button className="filter-area-button button">
                <img
                  alt=""
                  src="/images/website/location.svg"
                  className="filter-area-icon"
                />
              </button>
              <span className="filter-text06">Location</span>
            </div>
        </div> : null}
        <button className="events-narrow-search-bar button" onClick={() => setState({...state, openFilter: !state.openFilter})}>
            <span className="events-narrow-search-text">Filters</span>
            <img
                alt="image"
                src={state.openFilter ? "/images/website/filter-up.svg" : "/images/website/filter-down.svg"}
                className="events-narrow-search-icon"
            />
        </button>
        {state.openFilter ? <div className="events-filter-background"></div> : null}
    </div>
  )
}

export default Filter
