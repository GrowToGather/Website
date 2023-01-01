import React from 'react'
import { Helmet } from 'react-helmet'
import { Database, AccountData } from '../shared/Database'

import HLine from '../shared/h-line'
import EventCard from './scomponents/event-card'
import FooterBG from './scomponents/footer-b-g'
import Settings from './settings'
import './socials-app.css'
import Header from './scomponents/header'
import SimpleDialogCom from './scomponents/dialog'
import { ServerConn } from './Server/ServerConnection'

const SocialsApp = (props) => {

  const [openSettings, setOpenSettings] = React.useState(false)
  const [showDialog, setShowDialog] = React.useState({show: false, title: "", text: "", cancel: "", accept: "", placeholder: "", cancelAction: null, acceptAction: null});


  var waiting = ServerConn.waitForServerAndDatabase()
  console.log(waiting);
  if (waiting) {
    waiting.then(function() {loadData()}).catch()
  } else {
    loadData()
  }


  function loadData() {
    if (AccountData.uuid != "" && AccountData.clientID == -1) {
      var data = AccountData
      data["type"] = "register-client"
      data.publicKey = String.fromCharCode.apply(null, new Uint8Array(data.publicKey))
      delete data.privateKey
      console.log(data)
      ServerConn.sendToServer(data, false)
    }

    if (AccountData.uuid == "" && !showDialog.show && !openSettings) {
      setShowDialog({show: true, title: "Create Account", text: "Enter your Email to create an account or connect to your account on another device.",
        cancel: "Connect to other Device", accept: "Create Account", placeholder: "Email Address", cancelAction: connectToDevice, acceptAction: createAccount})
    }
  }

  async function createAccount(email) {
    await ServerConn.createAccount(email)
    setShowDialog({show: false, title: "", text: "", cancel: "", accept: "", placeholder: "", cancelAction: null, acceptAction: null})
  }

  function connectToDevice() {
    setOpenSettings(true)
    setShowDialog({show: false, title: "", text: "", cancel: "", accept: "", placeholder: "", cancelAction: null, acceptAction: null})
  }

  return (
    <div className="socials-app-container">
      <Helmet>
        <title>Socials App</title>
        <meta
          property="og:title"
          content="Socials App"
        />
      </Helmet>
      <Header open={setOpenSettings}/>
      <div className="socials-app-container2">
        <h1>
          <span>Favorites</span>
        </h1>
        <HLine rootClassName="h-line-root-class-name1"></HLine>
        <div className="socials-app-container3">
          <EventCard rootClassName="event-card-root-class-name11"></EventCard>
          <EventCard rootClassName="event-card-root-class-name12"></EventCard>
          <EventCard rootClassName="event-card-root-class-name13"></EventCard>
          <EventCard rootClassName="event-card-root-class-name14"></EventCard>
          <EventCard rootClassName="event-card-root-class-name15"></EventCard>
          <EventCard rootClassName="event-card-root-class-name16"></EventCard>
          <EventCard rootClassName="event-card-root-class-name24"></EventCard>
          <EventCard rootClassName="event-card-root-class-name23"></EventCard>
          <EventCard rootClassName="event-card-root-class-name22"></EventCard>
        </div>
        <h1>
          <span>Recently Joined</span>
        </h1>
        <HLine rootClassName="h-line-root-class-name2"></HLine>
        <div className="socials-app-container4">
          <EventCard rootClassName="event-card-root-class-name20"></EventCard>
          <EventCard rootClassName="event-card-root-class-name21"></EventCard>
        </div>
        <h1>Suggestions</h1>
        <HLine rootClassName="h-line-root-class-name"></HLine>
        <div className="socials-app-container5">
          <EventCard rootClassName="event-card-root-class-name17"></EventCard>
          <EventCard rootClassName="event-card-root-class-name18"></EventCard>
          <EventCard rootClassName="event-card-root-class-name19"></EventCard>
        </div>
      </div>
      <FooterBG rootClassName="footer-b-g-root-class-name"></FooterBG>
      { openSettings ? <Settings close={setOpenSettings}/> : null }
      {showDialog.show ? <SimpleDialogCom content={showDialog}/> : null}

    </div>
  )
}

export default SocialsApp
