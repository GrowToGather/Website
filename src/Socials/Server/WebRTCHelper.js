var mediaConstraints = {
    audio: true,            // We want an audio track
    video: {
      aspectRatio: {
        ideal: 1.333333     // 3:2 aspect is preferred
      }
    }
  };
  
  var myUsername = null;
  var targetUsername = null;      // To store username of other peer
  var myPeerConnection = null;    // RTCPeerConnection
  var webcamStream = null;        // MediaStream from webcam

class WebRTCHelper {
    async createPeerConnection() {
        myPeerConnection = new RTCPeerConnection({
        iceServers: [
            {
            urls: [  "stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302" ]
            }
        ]
        });
        myPeerConnection.onicecandidate = WebRTC.handleICECandidateEvent;
        myPeerConnection.oniceconnectionstatechange = WebRTC.handleICEConnectionStateChangeEvent;
        myPeerConnection.onicegatheringstatechange = WebRTC.handleICEGatheringStateChangeEvent;
        myPeerConnection.onsignalingstatechange = WebRTC.handleSignalingStateChangeEvent;
        myPeerConnection.onnegotiationneeded = WebRTC.handleNegotiationNeededEvent;
        myPeerConnection.ontrack = WebRTC.handleTrackEvent;
    }
    
    async handleNegotiationNeededEvent() {
        console.log("*** Negotiation needed");
    
        try {
        console.log("---> Creating offer");
        const offer = await myPeerConnection.createOffer();
        
        if (myPeerConnection.signalingState !== "stable") {
            console.log("     -- The connection isn't stable yet; postponing...")
            return;
        }
        
        console.log("---> Setting local description to the offer");
        await myPeerConnection.setLocalDescription(offer);
        
        console.log("---> Sending the offer to the remote peer");
        WebRTC.sendToServer({
            name: myUsername,
            target: targetUsername,
            type: "video-offer",
            sdp: myPeerConnection.localDescription
        });
        } catch(err) {
        console.log("*** The following error occurred while handling the negotiationneeded event:");
        WebRTC.reportError(err);
        };
    }
    
    handleTrackEvent(event) {
        console.log("*** Track event");
        document.getElementById("received_video").srcObject = event.streams[0];
        document.getElementById("hangup-button").disabled = false;
    }

    handleICECandidateEvent(event) {
        if (event.candidate) {
        console.log("*** Outgoing ICE candidate: " + event.candidate.candidate);
    
        WebRTC.sendToServer({
            type: "new-ice-candidate",
            target: targetUsername,
            candidate: event.candidate
        });
        }
    }
        
    handleICEConnectionStateChangeEvent(event) {
        console.log("*** ICE connection state changed to " + myPeerConnection.iceConnectionState);
    
        switch(myPeerConnection.iceConnectionState) {
        case "closed":
        case "failed":
        case "disconnected":
            WebRTC.closeVideoCall();
            break;
        default:
            break;
        }
    }
    
    handleSignalingStateChangeEvent(event) {
        console.log("*** WebRTC signaling state changed to: " + myPeerConnection.signalingState);
        switch(myPeerConnection.signalingState) {
        case "closed":
            WebRTC.closeVideoCall();
            break;
        default:
            break;
        }
    }
    
    handleICEGatheringStateChangeEvent(event) {
        console.log("*** ICE gathering state changed to: " + myPeerConnection.iceGatheringState);
    }

    closeVideoCall() {
        var localVideo = document.getElementById("local_video");
        
        if (myPeerConnection) {    
        myPeerConnection.ontrack = null;
        myPeerConnection.onnicecandidate = null;
        myPeerConnection.oniceconnectionstatechange = null;
        myPeerConnection.onsignalingstatechange = null;
        myPeerConnection.onicegatheringstatechange = null;
        myPeerConnection.onnotificationneeded = null;
        
        myPeerConnection.getTransceivers().forEach(transceiver => {
            transceiver.stop();
        });
    
        if (localVideo.srcObject) {
            localVideo.pause();
            localVideo.srcObject.getTracks().forEach(track => {
            track.stop();
            });
        }
        
        myPeerConnection.close();
        myPeerConnection = null;
        webcamStream = null;
        }

        document.getElementById("hangup-button").disabled = true;
        targetUsername = null;
    }
        
    handleHangUpMsg(msg) {
        console.log("*** Received hang up notification from other peer");
    
        WebRTC.closeVideoCall();
    }
    
    hangUpCall() {
        WebRTC.closeVideoCall();
    
        WebRTC.sendToServer({
            name: myUsername,
            target: targetUsername,
            type: "hang-up"
        });
    }
    
    async invite(clickedUsername) {
        console.log("Starting to prepare an invitation");
        if (myPeerConnection) {
        alert("You can't start a call because you already have one open!");
        } else {  
        if (clickedUsername === myUsername) {
            alert("I'm afraid I can't let you talk to yourself. That would be weird.");
            return;
        }
    
        targetUsername = clickedUsername;
        WebRTC.createPeerConnection();
        
        try {
            webcamStream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
            document.getElementById("local_video").srcObject = webcamStream;
        } catch(err) {
            WebRTC.handleGetUserMediaError(err);
            return;
        }
        
        try {
            webcamStream.getTracks().forEach(
            track => myPeerConnection.addTransceiver(track, {streams: [webcamStream]})
            );
        } catch(err) {
            WebRTC.handleGetUserMediaError(err);
        }
        }
    }
    
    async handleVideoOfferMsg(msg) {
        targetUsername = msg.name;
        
        console.log("Received video chat offer from " + targetUsername);
        if (!myPeerConnection) {
            WebRTC.createPeerConnection();
        }
        
        var desc = new RTCSessionDescription(msg.sdp);
        
        if (myPeerConnection.signalingState !== "stable") {
        console.log("  - But the signaling state isn't stable, so triggering rollback");
    
        await Promise.all([
            myPeerConnection.setLocalDescription({type: "rollback"}),
            myPeerConnection.setRemoteDescription(desc)
        ]);
        return;
        } else {
        console.log ("  - Setting remote description");
        await myPeerConnection.setRemoteDescription(desc);
        }
        
        if (!webcamStream) {
        try {
            webcamStream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
        } catch(err) {
            WebRTC.handleGetUserMediaError(err);
            return;
        }
    
        document.getElementById("local_video").srcObject = webcamStream;
        
        try {
            webcamStream.getTracks().forEach(
            track => myPeerConnection.addTransceiver(track, {streams: [webcamStream]})
            );
        } catch(err) {
            WebRTC.handleGetUserMediaError(err);
        }
        }
    
        console.log("---> Creating and sending answer to caller");
    
        await myPeerConnection.setLocalDescription(await myPeerConnection.createAnswer());
    
        WebRTC.sendToServer({
            name: myUsername,
            target: targetUsername,
            type: "video-answer",
            sdp: myPeerConnection.localDescription
        });
    }
        
    async handleVideoAnswerMsg(msg) {
        console.log("*** Call recipient has accepted our call");
    
        var desc = new RTCSessionDescription(msg.sdp);
        await myPeerConnection.setRemoteDescription(desc).catch(WebRTC.reportError);
    }
    
    async handleNewICECandidateMsg(msg) {
        var candidate = new RTCIceCandidate(msg.candidate);
    
        console.log("*** Adding received ICE candidate: " + JSON.stringify(candidate));
        try {
            await myPeerConnection.addIceCandidate(candidate)
        } catch(err) {
            WebRTC.reportError(err);
        }
    }
    
    handleGetUserMediaError(e) {
        console.log_error(e);
        switch(e.name) {
        case "NotFoundError":
            alert("Unable to open your call because no camera and/or microphone" +
                "were found.");
            break;
        case "SecurityError":
        case "PermissionDeniedError":
            break;
        default:
            alert("Error opening your camera and/or microphone: " + e.message);
            break;
        }  
        WebRTC.closeVideoCall();
    }
    
    reportError(errMessage) {
        console.log_error(`Error ${errMessage.name}: ${errMessage.message}`);
    }
}
export const WebRTC = new WebRTCHelper()