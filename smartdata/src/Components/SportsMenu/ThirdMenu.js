import React from 'react'

export function ThirdMenu(props) {

    return(
        <div className="third__menu">
            {
                props.itemNodes.map(item => 
                    <a href='/' key={item.key} className="third__menu__component">
                        <p>{item.label}</p>
                        <span>{item.views}</span>
                    </a>
                    )
            }
        </div>
    )
}