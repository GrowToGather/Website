import { openDB } from 'idb';
import {v4 as uuidv4} from 'uuid';

let db;
let open = false;
let privateKey;
let publicKey;
class DBService {

    waitForDatabase() {
        if (!open) {
            return new Promise(async function(resolve) {
                await Database.openDatabase()
                resolve()
            });
        }
        return false
    }

    async openDatabase() {
        if (!window.indexedDB) {
            console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
        }

        console.log("Open Database")
        db = await openDB("SocialsDB", 2, {async upgrade(db, oldVersion, newVersion, transaction) {
            const objectStore = db.createObjectStore("settings");
            await objectStore.add({name: "", gender: 0, age: 0, minAge: 0, maxAge: 0, date: -1}, "personalInformation");
            await objectStore.add({blob: null, date: -1}, "profileImg");
            await objectStore.add({clientID: -1, uuid: "", email: "", privateKey: null, publicKey: null, date: -1}, "account");
        }})

        AccountData = await Database.get("settings", "account")
        if (AccountData.privateKey != null) {
            privateKey = await window.crypto.subtle.importKey("pkcs8", AccountData.privateKey, {name: "RSA-OAEP", hash: "SHA-256"}, true, ["decrypt"]);
            publicKey = await window.crypto.subtle.importKey("spki", AccountData.publicKey, {name: "RSA-OAEP", hash: "SHA-256"}, true, ["encrypt"]);
        }
        open = true;
    }

    get(objectStore, index) {
        const settingsStore = db.transaction(objectStore);
        const persInfoObjStore = settingsStore.objectStore(objectStore);
        return persInfoObjStore.get(index);
    }

    put(objectStore, key, value) {
        const settingsStore = db.transaction(objectStore, "readwrite");
        const persInfoObjStore = settingsStore.objectStore(objectStore);
    
        persInfoObjStore.put(value, key);
    }

    deleteDatabase() {
        db.close()
        const request = window.indexedDB.deleteDatabase("SocialsDB")

        request.onsuccess = event => {
            Database.openDatabase()
        };
    }

    downloadAllData() {
        const transaction = db.transaction(["settings"]);
        const object_store = transaction.objectStore("settings");
        const request = object_store.openCursor();
        
        const data = {settings: {}}

        request.onerror = function(event) {
          console.err("error fetching data");
        };
        request.onsuccess = async function(event) {
          let cursor = event.target.result;
          if (cursor) {
              let key = cursor.primaryKey;
              let value = cursor.value;
                  if (key != "profileImg") {
                    /*console.log(cursor.value)
                    value = {blob: await cursor.value.blob.text()};
                    console.log(value)*/
                    data["settings"][key] = value
                }
                cursor.continue();
          }
          else {
            console.log("Download SocialsDB")
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data)));
            element.setAttribute('download', "SocialsDB.backup");
        
            element.style.display = 'none';
            document.body.appendChild(element);
        
            element.click();
        
            document.body.removeChild(element);
          }
        };
    }

    loadAllData(e) {
        console.log("Load Backup")

        var file = new FileReader();
        file.readAsText(e.target.files[0]);
        file.onload = () => {
            var data = JSON.parse(file.result)
            Object.entries(data).map(objectStore => {
                let objectStoreName = objectStore[0];
                let objectStoreJson = objectStore[1];
                Object.entries(objectStoreJson).map(entry => {
                    let key = entry[0];
                    let value = entry[1];
                    Database.put(objectStoreName, key, value)
                });
            });
        }
    }

    async createAccount(email) {
        let uuid = uuidv4();
        let keyPair = await window.crypto.subtle.generateKey(
            {
                name: "RSA-OAEP",
                modulusLength: 4096,
                publicExponent: new Uint8Array([1, 0, 1]),
                hash: "SHA-256"
            },
            true,
            ["encrypt", "decrypt"]
        );
        let privateKey = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
        let publicKey = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);

        await Database.put("settings", "account", {clientID: -1, uuid: uuid, email: email, privateKey: privateKey, publicKey: publicKey, date: 0});
        AccountData = {clientID: -1, uuid: uuid, email: email, privateKey: privateKey, publicKey: publicKey, date: 0}
    }

    updateAccountData(key, val) {
        AccountData[key] = val
        Database.put("settings", "account", AccountData);
    }

    async setDate(objectStore, index, date) {
        var obj = await Database.get(objectStore, index)
        obj.date = date
        Database.put(objectStore, index, obj)
    }

    async getLastDates() {
        const settingsStore = db.transaction("settings");
        const store = settingsStore.objectStore("settings");
        var dates = {}
        var keys = await store.getAllKeys() 
        for (var i = 0; i < keys.length; i++) {
            dates[keys[i]] = (await store.get(keys[i]))["date"]
        }
        return dates;
    }

    async update(objectStore, key, value) {
        const settingsStore = db.transaction(objectStore, "readwrite");
        const persInfoObjStore = settingsStore.objectStore(objectStore);
        var data = await persInfoObjStore.get(key);
        for (var idx in value) {
            data[idx] = value[idx]
        }
        persInfoObjStore.put(data, key);
    }
}

export var AccountData = null
export const Database = new DBService()
