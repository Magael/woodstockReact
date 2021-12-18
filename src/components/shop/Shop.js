import React from 'react';
import './shop.css';
import woodRestaurant from '../img/woodRestaurant.png';

const Shop = () => {
    return (
        <div>
            <div className="shopLine"></div>
            <h1 className="shopTitle">SHOP</h1>
            <p className="shopPara">
                    Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
            </p>
            <div className="shopBtn">
                <p className="shopGo">Go Shopping</p>
                <div className="btnLine"></div>
            </div>
            <div className="shopRect">
                <img className="restaurant" src={woodRestaurant} alt="Restaurant" />
            </div>
        </div>
    )
}

export default Shop
