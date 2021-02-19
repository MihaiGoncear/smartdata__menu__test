import React from 'react';
import { ThirdMenu } from './ThirdMenu'

export function SecondMenu(props){
    let arrowResult = props.ArrowResult;
    let eNodes = props.SecondMenuInfo;

    if(arrowResult){

        return (
            <div className="second__menu">
                {
                    eNodes.map( item => 
                        <React.Fragment key={item.key}>
                            <div className="second__menu__component">
                                <p>{item.label}
                                    <i 
                                        onClick={props.setArrowStatusToStateSecondMenu} id={item.key} 
                                        className={props.ArrowResultSecondMenu.indexOf(item.key) === -1 ? "arrow fa fa-angle-down" : " minus fa fa-minus"}>
                                    </i>
                                </p>
                                <a href='/' className='views'>{item.views}</a>
                            </div>

                            {props.ArrowResultSecondMenu.indexOf(item.key) !== -1 
                            ? <ThirdMenu 
                                ArrowResultSecondMenu={props.ArrowResultSecondMenu} 
                                itemNodes={item.nodes} 
                                setArrowStatusToStateSecondMenu={props.setArrowStatusToStateSecondMenu}/> 
                            : null}
                        </React.Fragment>
                    )
                }
            </div>
        )
        
    }


}