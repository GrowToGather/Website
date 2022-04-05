import React from 'react';
import './J2F.css';
import {useLocation} from 'react-router-dom';
import {hangUpCall, connect} from './chatclient'


function J2F(props) {

    const location = useLocation();
    console.log(location.state.username);

    connect(location.state.username)

	return (
		<div className="container">
            <div className="camerabox">
                <video id="received_video" autoPlay></video>
                <video id="local_video" autoPlay muted></video>
                <button id="hangup-button" onClick={hangUpCall} role="button" disabled>Hang Up</button>
            </div>
        </div>
	);
}

export default J2F;