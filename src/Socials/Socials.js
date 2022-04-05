import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Socials() {

    const [username, setInputText] = useState("");
    const navigate = useNavigate();

    const changeText = (e) => {
        setInputText(e.target.value);
    }

    function openSocial(social) {
        console.log(social);
        if (username === "") {
            alert("Enter a Username first!");
            return
        }

        navigate("/Socials/"+social, { state: { username: username }})

        /*const win = window.open("/Socials/"+social, "_self");
        if (win != null) {
            win.focus();
        }*/
    }

    return (
        <div className="Socials">
            <center>
                <h1>Socials</h1>
                <br/>
                <h3>Username:</h3>
                <input type="text" value={username} onChange={changeText}></input>
                <br/><br/>
                <table>
                    <tbody>
                        <tr>
                            <th><button style={{fontSize: 20}} onClick={() => openSocial("J2F")}>JoinToFriendship</button></th>
                            <th><button style={{fontSize: 20}} onClick={() => openSocial("J2D")}>JoinToDate</button></th>
                            <th><button style={{fontSize: 20}} onClick={() => openSocial("J2C")}>JoinToChat</button></th>
                        </tr>
                    </tbody>
                </table>
            </center>
        </div>
    );
}

export default Socials;