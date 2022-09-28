import React from 'react'

import PropTypes from 'prop-types'
import { Database } from '../../shared/Database'
import { QRCodeSVG } from 'qrcode.react';
import { QrReader } from 'react-qr-reader';

import HLine from '../../shared/h-line'
import Webcam from 'react-webcam';

import './personal-information.css'

const PersonalInformation = (props) => {

  const [showQR, setShowQR] = React.useState(false);
  const [data, setData] = React.useState('No result');


  function receivedImage(e) {
      props.setImage({url: URL.createObjectURL(e.target.files[0]), blob: e.target.files[0]});
      props.addUpdate(hasUpdate => ({...hasUpdate, ["img"]: true}))
  }

  function createQR() {
    setShowQR(true)
  }

  return (
    <div className="personal-information-container">
      <div className="personal-information-container01">
        <span className="personal-information-text">Profile Picture</span>
        <HLine rootClassName="h-line-root-class-name6"></HLine>
        <div className="personal-information-container02">
          <img
            src={props.image.url}
            className="personal-information-image"
          />
          <div className="personal-information-container03">
            <label className="personal-information-button button" htmlFor="profileImg">Upload Image</label>
            <input type="file" id="profileImg" onChange={receivedImage} 
              accept="image/png, image/jpeg" style={{display: "none"}}/>
            <button className="personal-information-button1 button">Take a Picture</button>
          </div>
        </div>
        <span className="personal-information-text01">Particulars</span>
        <HLine rootClassName="h-line-root-class-name7"></HLine>
        <div className="personal-information-container04">
          <span className="personal-information-text02">Name</span>
          <input
            type="text"
            placeholder="name"
            className="personal-information-textinput input"
            onChange={event => props.update("personalInformation", "name", event.target.value)}
            value={props.data?.name}
          />
        </div>
        <div className="personal-information-container05">
          <span className="personal-information-text03">Gender</span>
          <select className="personal-information-select" 
            onChange={event => props.update("personalInformation", "gender", event.target.value)}
            value={props.data?.gender}>
            <option value="0" disabled>Choose Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
        <div className="personal-information-container06">
          <span className="personal-information-text04">Age</span>
          <input
            type="number"
            placeholder="18"
            className="personal-information-textinput1 input"
            onChange={event => props.update("personalInformation", "age", event.target.value)}
            value={props.data?.age || ''}
          />
        </div>
        <span className="personal-information-text05">Dating Preferences</span>
        <HLine rootClassName="h-line-root-class-name8"></HLine>
        <div className="personal-information-container07">
          <span className="personal-information-text06">Min Age</span>
          <input
            type="number"
            placeholder="18"
            className="personal-information-textinput2 input"
            onChange={event => props.update("personalInformation", "minAge", event.target.value)}
            value={props.data?.minAge || ''}
          />
          <span className="personal-information-text07">Max Age</span>
          <input
            type="number"
            placeholder="99"
            className="personal-information-input input"
            onChange={event => props.update("personalInformation", "maxAge", event.target.value)}
            value={props.data?.maxAge || ''}
          />
        </div>
        <span className="personal-information-text08">Interests</span>
        <HLine rootClassName="h-line-root-class-name9"></HLine>
        <button className="personal-information-add-button"><img
          src="/images/socials/add.svg"
          className="personal-information-image1"
        /></button>
        <span className="personal-information-text09">Account Mangement</span>
        <HLine rootClassName="h-line-root-class-name10"></HLine>
        <div className="personal-information-container08">
          <div className="personal-information-container09">
            {showQR ? <QRCodeSVG width={"95%"} height={"95%"} value="https://www.growtogather.org/" /> : 
            <span id="qrcode" className="personal-information-text10">Generate a QR code and scan it with another Device to share Account Information.</span>}
          </div>
          <div className="personal-information-container10">
            
            <button className="personal-information-button2 button" onClick={createQR}>Generate QR</button>
            <button className="personal-information-button3 button">Scan QR</button>
          </div>
        </div>
        <div className="personal-information-container11">
          <button className="personal-information-button4 button" onClick={Database.downloadAllData}>Create Data Backup</button>
          <label className="personal-information-button5 button" htmlFor="backupFile">Load Backup</label>
          <input type="file" id="backupFile" onChange={Database.loadAllData}
              accept="backup" style={{display: "none"}}/>
        </div>
        <button className="personal-information-button4 button" onClick={props.deleteAll}>Delete all Data</button>

        <span className="personal-information-text11">Account Information will be saved on your device, 
        therefore deleting Browser Data(not Cache or History data) will result in lose of Account Information. 
        Data will not be saved on servers and only be shared with the server while joining an event.</span>
        <div style={{width: "100%"}}>
        <QrReader onResult={(result, error) => {
          if (result) {
            setData(result?.text);
          }
        }}
      
        videoId= "video"
        constraints={{facingMode: "environment"}}
      
        />
        <p>{data}</p>
        </div>
        <br/><br/><br/>
      </div>
    </div>
  )
}

export default PersonalInformation
