import React from 'react';
import soccer from '../Icons/soccer.png'
import basketball from '../Icons/basketball.png';
export function Popular() {
    return(
        <div className="menu__container">
            <h1>Populaire</h1>
            <ul>
                <li><img src={soccer} alt="soccer"/>Ligue de Champions</li>
                <li><img src={soccer} alt="soccer"/>Europa League</li>
                <li><img src={basketball} alt="nba"/>NBA</li>
            </ul>
        </div>
    )
}