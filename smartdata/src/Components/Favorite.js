import React from 'react'
import { SecondMenuFavorites } from './FavoriteSportsMenu/SecondMenuFavorites'

export function Favorite (props){
    
    return(
        <div className='menu__container'>
            <div className='primary__menu'>
                <h1>MesFavorites</h1>
            {
                props.selectedSportArray.length > 0
                ? props.selectedSportArray.map(e => 
                    <React.Fragment key={e.key}>
                        <div className='primary__menu__component'>
                            <div className={props.ArrowStatusResultForFavorites.indexOf(e.key) !== -1 ? 'menu__border__on info' : 'menu__border__off info'}>
                                <img className='primary__menu__img' src={e.src} alt={e.label}/>
                                <p>{e.label}</p>
                                <i 
                                    onClick={props.setArrowStatusForFavoritesToState} 
                                    id={e.key} 
                                    className={props.ArrowStatusResultForFavorites.indexOf(e.key) === -1 ? "arrow fa fa-angle-down" : " minus fa fa-minus"}>    
                                </i>
                            </div>
                            <div className={props.ArrowStatusResultForFavorites.indexOf(e.key) !== -1 ? 'menu__border__on views' : 'menu__border__off views'}>
                                <a href='/'>{e.views}</a>
                                <span>
                                    <i 
                                        onClick={props.DeleteItemFromFavorites} 
                                        id={e.key} 
                                        className="star checked fa fa-star">
                                    </i>
                                </span>
                            </div>
                        </div>
                        {
                            props.ArrowStatusResultForFavorites.indexOf(e.key) !== -1 

                            ? <SecondMenuFavorites 
                                setArrowStatusForFavoritesToStateSecondMenu={props.setArrowStatusForFavoritesToStateSecondMenu}
                                ArrowStatusResultForFavoritesSecondMenu = {props.ArrowStatusResultForFavoritesSecondMenu} 
                                SecondMenuInfo={e.nodes}/> 
                            : null    
                        }
                    </React.Fragment>
                )
                :   <div className="favorite__info">
                        <span className='favorite__info__span'>
                            <i
                                className="star fa fa-star">
                            </i>
                            <p>&gt;</p>
                            <i
                                className="star checked fa fa-star">
                            </i>
                        </span>
                        <p className='favorite__info__p'>Cliquez sur les etoiles pour selectionner vos favoris et retrouvez-les ici</p>
                    </div>
            }

        </div>
        </div>
        
        
    )
}