import React from 'react'
import './menu-items.styles.scss'
import {withRouter} from 'react-router-dom'


const menuItems = (props) => {
    return(
        <div className= 'menu-item' style={{height: props.height}} onClick={() => {props.history.push(props.linkUrl)}} >
            <div className='background-image' style={{backgroundImage: `url(${props.imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{props.title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(menuItems)