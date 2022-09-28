import React from 'react'

import PropTypes from 'prop-types'

import './v-line.css'

const VLine = (props) => {
  return <div className={`v-line-container ${props.rootClassName} `}></div>
}

VLine.defaultProps = {
  rootClassName: '',
}

VLine.propTypes = {
  rootClassName: PropTypes.string,
}

export default VLine
