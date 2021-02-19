import React from 'react';
import { ThirdMenuForFavorites } from './ThirdMenuForFavorites'


export function SecondMenuFavorites(props) {

    let eNodes = props.SecondMenuInfo
    console.log('status', props.ArrowStatusResultForFavoritesSecondMenu)

    return (
        <div className="second__menu">
                {
                    eNodes.map( item => 
                        <React.Fragment key={item.key}>
                            <div className="second__menu__component">
                                <p>{item.label}
                                    <i 
                                        onClick={props.setArrowStatusForFavoritesToStateSecondMenu} 
                                        id={item.key} 
                                        className="arrow fa fa-angle-down">
                                    </i>
                                </p>
                                <a href='/' className='views'>{item.views}</a>
                            </div>

                            {props.ArrowStatusResultForFavoritesSecondMenu.indexOf(item.key) !== -1 
                            ? <ThirdMenuForFavorites itemNodes={item.nodes} /> 
                            : null}
                        </React.Fragment>
                    )
                }
            </div>
    )
}