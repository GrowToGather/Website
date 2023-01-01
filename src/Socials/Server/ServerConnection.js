import {WebRTC} from './WebRTCHelper'
import { ClientConn } from './ClientConnection'
import { AccountData, Database } from '../../shared/Database'
import { async } from 'regenerator-runtime';


var myHostname = window.location.hostname;
if (!myHostname) {
  myHostname = "localhost";
}

var connection = null;
var connectionEstablished = false;
var serverUrl;
var scheme = "ws";

if (document.location.protocol === "https:") {
  scheme += "s";
}
serverUrl = `${scheme}://${myHostname}:29090/${scheme}`;
connection = new WebSocket(serverUrl);

connection.onerror = function(evt) {
  console.log(evt);
}

connection.onmessage = function(evt) {
    console.dir(evt.data);
    var msg = JSON.parse(evt.data);

    switch(msg.type) {
      case "connected":
        break;
      case "registered":
        Database.updateAccountData("clientID", msg.clientID)    
        break;
      case "last-settings": 
        connectionEstablished = true;
        ClientConn.updateSettings(msg.personalInformation, msg.profileImg, msg.account)
        break;
      case "value-updated": 
        Database.setDate(msg.objectStore, msg.index ,msg.date)
        break;
      case "pairing":
        WebRTC.invite(msg.name)
        break;

      case "video-offer":
        WebRTC.handleVideoOfferMsg(msg);
        break;

      case "video-answer":
        WebRTC.handleVideoAnswerMsg(msg);
        break;

      case "new-ice-candidate":
        WebRTC.handleNewICECandidateMsg(msg);
        break;

      case "hang-up":
        WebRTC.handleHangUpMsg(msg);
        break;

      default:
        console.log("Unknown message received:", msg)
    }
    return false
};



async function waitForOpenSocket() {
  console.log(connectionEstablished)

  if (AccountData.uuid == "") {
    return false
  }
  console.log(connectionEstablished)

  if (!connectionEstablished) {
    return new Promise(async(resolve) => {
      if (connection.readyState !== connection.OPEN) {
        connection.addEventListener("open", async (_) => {
          //console.log( await Database.getLastDates())
          console.log("Send connect request")
          ServerConn.sendToServer({type: "connect", clientID: AccountData.clientID, dates: await Database.getLastDates()}, false)
          resolve();
        })
      } else {
        console.log("Send connect request")
        ServerConn.sendToServer({type: "connect", clientID: AccountData.clientID, dates: await Database.getLastDates()}, false)
        resolve();
      }

    });
  }
  return false
}



class ServerConnection {
  async createAccount(email) {
    await Database.createAccount(email);
    var data = AccountData
    data.type = "register-client"
    data.publicKey = String.fromCharCode.apply(null, new Uint8Array(data.publicKey))
    delete data.privateKey
    ServerConn.sendToServer(data, false)
  }

  sendToServer(msg, encrypted) {
    var msgJSON = JSON.stringify(msg);
    connection.send(msgJSON);
  }

  waitForServerAndDatabase() {
    var waiting = Database.waitForDatabase()
    if (waiting) {
      return new Promise(async function(resolve, reject) {
        console.log("test")
        var hmm = await waiting
        hmm = await waitForOpenSocket()
        console.log(hmm)
        resolve()
    });
    } else {
      return waitForOpenSocket()
    }
  }

  async put(objectStore, key, value) {
    await Database.put(objectStore, key, value)
    var data = value
    delete data.date
    ServerConn.sendToServer({"type": "update-values", "objectStore": objectStore, "table": key, "data": data}, true)
  }

  async putSpecial(objectStore, key, value, data) {
    await Database.put(objectStore, key, value)
    ServerConn.sendToServer({"type": "update-values", "objectStore": objectStore, "table": key, "data": data}, true)
  }
}

export const ServerConn = new ServerConnection()