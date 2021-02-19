import React from 'react';
import { Popular } from './Popular.js';
import { Sports } from './Sports.js'
import { Favorite } from './Favorite.js'


export function Main(props) {
    return(
        <div className="full__menu__container">
            <Popular/>
            
            <Favorite 
                selectedSportArray={props.selectedSportArray}
                
                setArrowStatusForFavoritesToState={props.setArrowStatusForFavoritesToState}
                ArrowStatusResultForFavorites = {props.ArrowStatusResultForFavorites}

                setArrowStatusForFavoritesToStateSecondMenu={props.setArrowStatusForFavoritesToStateSecondMenu}
                ArrowStatusResultForFavoritesSecondMenu = {props.ArrowStatusResultForFavoritesSecondMenu}

                DeleteItemFromFavorites={props.DeleteItemFromFavorites}
            />

            <Sports 
                LiveArrowStatusResult={props.LiveArrowStatusResult} 
                LiveArrowStatusToState={props.LiveArrowStatusToState}

                ArrowResultSecondMenu={props.ArrowResultSecondMenu} 
                setArrowStatusToStateSecondMenu={props.setArrowStatusToStateSecondMenu} 

                ArrowResult={props.ArrowResult} 
                setArrowStatusToState={props.setArrowStatusToState} 

                sportArray={props.sportArray} 
                
                SetClassNameForStars={props.SetClassNameForStars} 
                SetSelectedSportKeyToState={props.SetSelectedSportKeyToState} 
            />
            
            {/* <Other/> */}
        </div>
    )
}