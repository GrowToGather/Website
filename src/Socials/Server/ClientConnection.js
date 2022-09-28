import { Database } from "../../shared/Database";
import { ServerConn } from './ServerConnection'


async function sendUpdate(objectStore, key) {
    var data = await Database.get(objectStore, key)
    delete data.date

    switch (key) {
        case "account":
            delete data.clientID
            delete data.privateKey
            delete data.clientID
            break; 
        case "personalInformation":
            break;
        case "profileImg":
            var reader = new FileReader();  
            reader.onload = function () {
                ServerConn.putSpecial("settings", "profileImg", {blob: data.blob, date: 0}, {blob: reader.result, type: data.blob.type})    
            }
            reader.readAsDataURL(data.blob);
            break;
    }
    ServerConn.sendToServer({"type": "update-values" ,"objectStore": objectStore, "table": key, "data": data}, true)
}

class ClientConnection {
    async setClientID(clientID) {
        Database.updateAccountData("clientID", clientID)    
    }

    async updateSettings(personalInformation, profileImg, account) {
        if (personalInformation) {
            if (personalInformation.date > 0) {
                Database.update("settings", "personalInformation", personalInformation)    
            } else {
                sendUpdate("settings", "personalInformation")
            }
        }

        if (profileImg) {
            if (profileImg.date > 0) {
                profileImg.blob = 
                Database.update("settings", "profileImg", profileImg)    
            } else {
                sendUpdate("settings", "profileImg")
            }
        }

        if (account) {
            if (account.date > 0) {
                Database.update("settings", "account", account)    
            } else {
                sendUpdate("settings", "account")
            }
        }
    }
}

export const ClientConn = new ClientConnection()