import React from 'react'
import './footer.css';
import wood from '../img/wood.png';

const Footer = () => {
    return (
        <footer>
            <div className="footlogo">
                <img src={wood} alt='footLogo'/>
                <div className="line"></div>
            </div>
        </footer>
    )
}

export default Footer
