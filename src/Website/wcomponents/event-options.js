import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import './event-options.css'

const EventOptions = (props) => {
  const [state, setState] = useState({show: false, preview: "Choose", selectedAll: false, options: []});

  function selectOption(idx, selected) {
    state.options[idx].selected = selected;
    var selectAmount = 0;
    for (let i = 0; i < state.options.length; i++) {
      if (state.options[i].selected) {
        selectAmount++;
      }
    }
    if (selectAmount == state.options.length) {
      state.selectedAll = true
      state.preview = "All";
    } else if (selectAmount == 0) {
      state.selectedAll = true
      state.preview = "Choose";
    } else {
      state.selectedAll = false;
      state.preview = "Selected (" + selectAmount + ")";
    }
    setState({...state});
  }

  function selectAll(selectedAll) {
    for (let i = 0; i < state.options.length; i++) {
      state.options[i].selected = selectedAll;
    }
    state.selectedAll = selectedAll;
    if (selectedAll) {
      state.preview = "All";
    } else {
      state.preview = "Choose";
    }
    setState({...state});
  }

  useEffect(() => {
    document.title = "GrowToGather";
    setState({...state, options: props.selection});
  }, []);

  return (
    <div className={`event-options-container ${props.rootClassName} `}>
      { !state.show ? 
        <button className="event-options-closed-select button" onClick={() => setState({...state, show: true})}>
          <span className="event-options-closed-select-text">{ state.preview }</span>
          <img
            alt={props.image_alt}
            src="/images/website/down-icon.svg"
            className="event-options-closed-select-icon"
          />
        </button>
       :
        <div className="event-options-open-select">
          <button className="event-options-button button" onClick={() => setState({...state, show: false})}>
            <span className="event-options-open-select-text">{ state.preview }</span>
            <img
              alt={props.image_alt1}
              src="/images/website/up-icon.svg"
              className="event-options-open-select-icon"
            />
          </button>
          <button className="event-options-button2 button" onClick={() => selectAll(!state.selectedAll)}>
            <img
              alt={props.image_alt12}
              src={state.selectedAll ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
              className="event-options-image1"
            />
            <span className="event-options-text1">All</span>
          </button>
          { state.options.map((option, idx) => 
            <button className="event-options-button2 button" onClick={() => selectOption(idx, !option.selected)}>
              <img
                alt={props.image_alt12}
                src={option.selected ? "/images/website/checked-box.svg" : "/images/website/check-box.svg"}
                className="event-options-image1"
              />
              <span className="event-options-text1">{ option.text }</span>
            </button>
          )}
        </div>}
    </div>
  )
}

EventOptions.defaultProps = {
  image_src14: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src12: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src11: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  image_alt14: 'image',
  image_alt: 'image',
  image_alt13: 'image',
  image_src13: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt12: 'image',
  image_alt11: 'image',
  image_alt1: 'image',
}

EventOptions.propTypes = {
  image_src14: PropTypes.string,
  image_src12: PropTypes.string,
  image_src11: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt14: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt13: PropTypes.string,
  image_src13: PropTypes.string,
  image_alt12: PropTypes.string,
  image_alt11: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default EventOptions
