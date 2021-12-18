import React from 'react'
import './team.css';
import team from '../img/team.png';
import wood from'../img/wood.png';

const Team = () => {
    return (
        <div className="team">
            <img className='teamImg' src={team} alt='team' />
            <div className='lineTeam'></div>
            <img className='logoTeam' src={wood} alt='logo' width="70px" height="20px"/>
            <div className='rectTeam'>
                <h1 className='titleTeam'>CREATIVE TEAM</h1>
            </div>
            <div className='teamText'>
                <h1 className='teamTitle'> GOOD MINDSET</h1>
                <p className='teamPara'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <div className="meet">
                <p className='teamMeet'>Meet the team</p>
                <div className="lineMeet"></div>
            </div>
        </div>
    )
}

export default Team
