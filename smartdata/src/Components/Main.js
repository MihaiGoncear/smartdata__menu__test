import React from 'react';
import { Popular } from './Popular.js';
import { Sports } from './Sports.js'


export function Main(props) {
    return(
        <div className="full__menu__container">
            <Popular/>
            <Sports LiveArrowStatusResult={props.LiveArrowStatusResult} LiveArrowStatusToState={props.LiveArrowStatusToState} ArrowResultSecondMenu={props.ArrowResultSecondMenu} setArrowStatusToStateSecondMenu={props.setArrowStatusToStateSecondMenu} ArrowResult={props.ArrowResult} setArrowStatusToState={props.setArrowStatusToState} FullSportArray={props.FullSportArray} SetClassNameForStars={props.SetClassNameForStars} SetSelectedSportKeyToState={props.SetSelectedSportKeyToState} />
            {/* <Favorite/>
            
            <Other/> */}
        </div>
    )
}