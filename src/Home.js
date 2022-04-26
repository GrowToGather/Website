import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { format } from 'date-fns'


function Home() {

    const [events, setEventDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    var eventIndex = 0;

    function getEvents() {
        axios.get("https://www.73743355.xyz:23892/events/upcomming")
            .then(response => response.data)
            .then((data) => {
                setEventDetails(data)
                setIsLoading(true);
                console.log(data);
            });
    }

    useEffect(() => {
        document.title = "GrowToGather";
        getEvents();
    }, []);

    return (
        <div className="Home">
            <div className="topbar">
                <header>
                    <div className="header">
                        <a href="./"><img src="./images/logo.svg" alt="Logo image" /></a>

                        <h1 className="logo_text">Grow to Gather</h1>
                    </div>

                    <div className="nav">
                        <ul id="primaryNav" className="hide">
                            <li><a href="./Events">Events</a></li>
                            <li><a href="preston-10.html">About</a></li>
                            <li><a href="../lesson11/soda-springs.html">Contact</a></li>
                        </ul>
                    </div>
                </header>
            </div>



            <div className="contents">
                <img src="./images/bg_img.jpg" alt="weather" className="main__img" />
            </div>


            <div className="about">
                <div >
                    <img className="about__img" src="./images/about_img.jpg" alt="weather" />
                </div>
                <div className="about__text">
                    <h1 className="about__text-h1 about-h1">The Vision</h1>
                    <h2 className="about__text-h2">Our goal is to connect YOU with other young adults from all over the world! We want to introduce you to other cultures and through organising a variety of different activities create opportunities for you to find new friends</h2>
                </div>
            </div>


            <div className="events">
                <div className="events__content">
                    <div className="events__text">
                        <h1 className="events__text-h1">Upcoming Events</h1>
                    </div>


                    <div className="cards">
                        {
                            isLoading ? events.map(event =>
                                event.name != "" ? 
                                <div className="cards__1" key={eventIndex++}>
                                    <p className="cards__text-h">{event.name}</p>
                                    <p className="cards__date">{format(new Date(event.date * 1000), "do MMMM")}</p>
                                    <a href={event.link} className="text__link">{event.link}</a>
                                </div>
                                : 
                                <div className="cards__1" key={eventIndex++}>
                                    <p className="cards__text-h">No Further Events</p>
                                    <p className="cards__date" />
                                    <a href="" className="text__link" />
                                </div>
                            ) : 
                                <><div className="cards__1">
                                    <p className="cards__text-h" />
                                    <p className="cards__date" />
                                    <a href="" className="text__link" />
                                </div>
                                    <div className="cards__1">
                                        <p className="cards__text-h" />
                                        <p className="cards__date" />
                                        <a href="" className="text__link" />
                                    </div>
                                    <div className="cards__1">
                                        <p className="cards__text-h" />
                                        <p className="cards__date" />
                                        <a href="" className="text__link" />
                                    </div></>
                        }

                    </div>
                    <a href="../" className="text__link">Show More Events</a>
                </div>
            </div>

            <div className="reviews">

            </div>


            <div className="scrollup">
                <i className="fa fa-chevron-up"></i>
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

export default Home;