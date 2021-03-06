import React from 'react';
import { SportsList } from './SportsMenu/SportsList'

export function Sports(props){
    return (
        <div className="menu__container">
            <h1>Sports</h1>
            <SportsList 
                LiveArrowStatusResult={props.LiveArrowStatusResult} 
                LiveArrowStatusToState={props.LiveArrowStatusToState}

                ArrowResultSecondMenu={props.ArrowResultSecondMenu} 
                ArrowResult={props.ArrowResult}

                setArrowStatusToStateSecondMenu={props.setArrowStatusToStateSecondMenu} 
                setArrowStatusToState={props.setArrowStatusToState}

                sportArray={props.sportArray}
                 
                SetClassNameForStars={props.SetClassNameForStars} 
                SetSelectedSportKeyToState={props.SetSelectedSportKeyToState}/>
        </div>
    )
}