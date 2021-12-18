import React from 'react';
import './about.css';
import chair from '../img/chair.png';

const About = () => {
    return (
        <div>
            <div className="aboutRect">
                <img className="aboutChair" src={chair} alt='chair' />
            </div>
            <div className="aboutLine"></div>
                <h1 className="aboutTitle">ABOUT US</h1>
                <p className="aboutPara">
                    Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                </p>
            <div className="aboutBtn">
                <p className="aboutGo">LEARN MORE</p>
                <div className="btnAboutLine"></div>
            </div>
        </div>
    )
}

export default About
