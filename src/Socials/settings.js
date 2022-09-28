import React from 'react'

import SettingsMenuButton from './scomponents/settings-menu-button'
import VLine from '../shared/v-line'
import PersonalInformation from './settings/personal-information'
import { Database } from '../shared/Database'
import './settings.css'
import SimpleDialogCom from './scomponents/dialog'
import { ServerConn } from './Server/ServerConnection'

const Settings = (props) => {

  const [persInfo, setPersInfo] = React.useState({name: "", gender: 0, age: 0, minAge: 0, maxAge: 0, date: 0})
  const [profileImg, setProfileImg] = React.useState({url: "/images/socials/user.svg", blob: null});
  const [hasUpdate, addUpdate] = React.useState({persInfo: false, img: false});

  if (persInfo.name == "") {
    getSettings()
  } else {
    getProfileImg()
  }
  
  async function getSettings() {
    const result = await Database.get("settings", "personalInformation")
    if (result.name != "") {
      setPersInfo(result)
    }
    getProfileImg()
  } 

  function getProfileImg() {
    if (profileImg.blob == null) {
      const request = Database.get("settings", "profileImg")
      request.onsuccess = event => {
        const result = request.result

        if (result.blob != null) {
          setProfileImg({url: URL.createObjectURL(result.blob), blob: result.blob})
        }
      };
    }
  }

  function saveSettings() {
    if (hasUpdate.persInfo) {
      ServerConn.put("settings", "personalInformation", persInfo)
    }
    if(hasUpdate.img) {
      var reader = new FileReader();
        
      reader.onload = function () {
          ServerConn.putSpecial("settings", "profileImg", {blob: profileImg.blob, date: 0}, {blob: reader.result, type: profileImg.blob.type})    
      }
      reader.readAsDataURL(profileImg.blob);
    }
    props.close(false)
  }

  function updateSettingsValue(page, variable, value) {
    addUpdate(hasUpdate => ({...hasUpdate, ["persInfo"]: true}))
    switch (page) {
      case "personalInformation":
        setPersInfo(persInfo => ({...persInfo, [variable]: value}))
        break;
    }
  }

  function deleteAllData() {
    Database.deleteDatabase()
  }

  return (
    <div className="settings-container">
      <div className="settings-container1">
        <div className="settings-container2">
          <span className="settings-text">Settings</span>
          <SettingsMenuButton text="Personal Information" image_src={"/images/socials/user_info.svg"} color={"#88A0E3"}></SettingsMenuButton>
          <SettingsMenuButton text="General" image_src={"/images/socials/settings.svg"} color={"#9088E3"}></SettingsMenuButton>
          <SettingsMenuButton text="Video" image_src={"/images/socials/video.svg"} color={"#E388DE"}></SettingsMenuButton>
          <SettingsMenuButton text="Audio" image_src={"/images/socials/audio.svg"} color={"#E38893"}></SettingsMenuButton>
        </div>
        <VLine rootClassName="v-line-root-class-name"></VLine>

        <div className="settings-container3"><PersonalInformation data={persInfo} update={updateSettingsValue} deleteAll={deleteAllData}
         image={profileImg} setImage={setProfileImg} addUpdate={addUpdate}/>

        <div className="settings-bottom-container">
          <button className="settings-save-button button" onClick={() => saveSettings()}>Save Settings</button>
        </div>
        </div>
        <button className="settings-button button" onClick={() => props.close(false)}>
          <img
            alt="image"
            src="/images/socials/remove.svg"
            className="settings-image"
          />
        </button>

      </div>
    </div>
  )
}

export default Settings
