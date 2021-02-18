import React from 'react';
import { SecondMenu } from './SecondMenu'
import { live } from './Functions/liveArray'
import { SecondMenuLive } from './SecondMenuLive'


export function SportsList(props){

    let elementKeyFromState = props.SetClassNameForStars
    let FullSportArray = props.FullSportArray

    return (
        <div className='primary__menu'>

            <React.Fragment>
                <div>
                    <div className='primary__menu__component'>
                        <div className={!props.LiveArrowStatusResult ? 'menu__background__on info' : 'menu__background__off info'}>
                            <img className='live__img' src={live.src} alt={live.label}/>
                            <p  className='live__p'>{live.label}</p>
                            <i onClick={props.LiveArrowStatusToState} id={live.key} className={!props.LiveArrowStatusResult ? "arrow fa fa-angle-down" : " minus fa fa-minus"}></i>
                        </div>
                        <div className={!props.LiveArrowStatusResult ? 'menu__background__on views' : 'menu__background__off views'}>
                            <a href='/'>{live.views}</a>
                        </div>
                    </div>
                </div>
                {props.LiveArrowStatusResult ? <SecondMenuLive LiveMenuInfo={live.nodes}/> : null} 
            </React.Fragment>

            {
                FullSportArray.map((e) => 
                <React.Fragment key={e.key}>
                    <div className='primary__menu__component'>
                        <div className={props.ArrowResult.indexOf(e.key) !== -1 ? 'menu__border__on info' : 'menu__border__off info'}>
                            <img className='primary__menu__img' src={e.src} alt={e.label}/>
                            <p>{e.label}</p>
                            <i onClick={props.setArrowStatusToState} id={e.key} className={props.ArrowResult.indexOf(e.key) === -1 ? "arrow fa fa-angle-down" : " minus fa fa-minus"}></i>
                        </div>
                        <div className={props.ArrowResult.indexOf(e.key) !== -1 ? 'menu__border__on views' : 'menu__border__off views'}>
                            <a href='/'>{e.views}</a>
                            <span>
                                <i onClick={props.SetSelectedSportKeyToState} id={e.key} className={elementKeyFromState.indexOf(e.key) !== -1 ? "star checked fa fa-star" : "star fa fa-star"}></i>
                            </span>
                        </div>
                    </div>
                    {props.ArrowResult.indexOf(e.key) !== -1 ? <SecondMenu ArrowResultSecondMenu={props.ArrowResultSecondMenu} setArrowStatusToStateSecondMenu={props.setArrowStatusToStateSecondMenu} SecondMenuInfo={e.nodes} ArrowResult={props.ArrowResult}/> : null} 
                    
                </React.Fragment>
                )
            }
            
        </div>
    )
}