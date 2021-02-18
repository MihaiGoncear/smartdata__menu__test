import React from 'react'

export function SecondMenuLive(props){
    return (
        <div className='second__menu'>
            {
                props.LiveMenuInfo.map(item => 
                    <React.Fragment key={item.key}>
                        <div className="second__menu__component">
                            <p>{item.label}</p>
                            <a href='/' className='views'>{item.views}</a>
                        </div>
                    </React.Fragment>
                    )
            }
        </div>
    )
}