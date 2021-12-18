import React from 'react';
import './header.css';
import wood from '../img/wood.png';
import woodstock from '../img/woodstock.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="ligne"></div>
                <img src={wood} alt='logo' width="70px" height="20px"/>
            </div>
            <div className="left">
            </div>
            <div className="right">
            </div>
            <div className="title">
                <div className="titleligne"></div>
                <img src={woodstock} alt='title'/>
            </div>
            <>
            <div className="headerligne"></div>
            </>
        </div>
    )
}

export default Header

