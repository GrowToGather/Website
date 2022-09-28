import React from 'react'

import './dialog.css'

const SimpleDialogCom = (props) => {
  const [value, setValue] = React.useState("")

  return (
    <div className="simple-dialog-com-container">
      <div className="simple-dialog-com-container1">
        <span className="simple-dialog-com-text">{props.content.title}</span>
        <span className="simple-dialog-com-text1">{props.content.text}</span>
        <input 
          type="text"
          placeholder={props.content.placeholder}
          className="simple-dialog-com-input input"
          onChange={event => setValue(event.target.value)}
        />
        <div className="simple-dialog-com-container2">
          <button className="simple-dialog-com-button button" onClick={props.content.cancelAction}>
            {props.content.cancel}
          </button>
          <button className="simple-dialog-com-button1 button" onClick={() => props.content.acceptAction(value)}>
            {props.content.accept}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SimpleDialogCom
