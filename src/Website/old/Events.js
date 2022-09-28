import React, { useEffect } from 'react';
import './Events.css';

function Events() {

    useEffect(() => {
        document.title = "Event Page";
    }, []);

    return (
        <div className="Events">
            <div className="topbar">
                <header>
                    <div className="header">
                        <a href="../"><img src="./images/logo.svg" alt="Logo" /></a>

                        <h1 className="logo_text">Grow to Gather</h1>
                    </div>

                    <div className="nav">
                        <ul id="primaryNav" className="hide">
                            <li><a href="./">Events</a></li>
                            <li><a href="preston-10.html">About</a></li>
                            <li><a href="../lesson11/soda-springs.html">Contact</a></li>
                        </ul>
                    </div>
                </header>
            </div>




            <div className="filter">
                <div className="filter_option">
                    <p className="option">Activity</p>
                    <p className="option">Area</p>
                    <p className="option">Language</p>
                    <p className="option">Age</p>
                </div>
                <div className="filter_choice">
                    <p className="choice">choose..</p>
                    <p className="choice">choose..</p>
                    <p className="choice">choose..</p>
                    <p className="choice">choose..</p>
                </div>
            </div>

            <div className="all">
                <article className="slider">
                    <h1 className="month">June 2021</h1>
                </article>
            </div>

            <div className="card">
                <div className="flex">
                    <h2 className="title">German Language Lounge</h2>
                    <h3 className="when">Saturday, 5 June 2021 </h3>
                    <h4 className="time">16.30-17.30</h4>

                    <div className="links">
                        <button className="first_link"> <a href="./" className="btn_card"> View Details</a></button>
                        <button className="second_link"><a href="./" className="btn_card2"> <img src="./images/zoom.svg" alt="" className="btn_svg" /> Join via Zoom</a></button>
                    </div>
                </div>
                <div className="flex2"><img src="./images/card_pic1.jpg" alt="activity" className="card_picture" /></div>
            </div>


            <footer>

                <div className="footer_1">
                    <div className="footer__text">
                        <p className="soc_p">Contact Information</p>
                        <p className="soc_email">growtogatherworldwide@gmail.com</p>
                        <p className="copyright">©GrowToGather2022</p>
                    </div>
                </div>

                <div className="social__text">
                    <p className="soc_p">Our Social Media Channels</p>
                    <div className="socials ">
                        <a target="_blank " href="https://www.instagram.com/growtogatherworldwide/"><img src="./images/inst.svg" alt="instagram icon" className="socials_icon" /></a>
                        <a target="_blank " href="https://www.facebook.com/"><img src="./images/facebook.svg" alt="fb icon " className="socials_icon " /></a>
                        <a target="_blank " href="https://discord.com/channels/810245191637270548/862425250335817788"><img src="./images/discord.svg" alt="discord icon " className="socials_icon " /></a>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Events;