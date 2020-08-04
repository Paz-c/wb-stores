import React from 'react'
import './collection-item.scss'

const collectionItem = (props) => {
    return (
        <div className="collection-item">
            <div style={{backgroundImage: `url(${props.imageUrl})`}} className='image' />
            <div className='collection-footer'>
                <div className="name">{props.name}</div>
    <div className='price'>{props.price}</div>
            </div>
        </div>
    )
}

export default collectionItem