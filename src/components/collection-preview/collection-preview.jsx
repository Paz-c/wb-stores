import React from 'react'
import './collection-preview.scss'
import CollectionItem from '../collection-item/collection-item.jsx'


const collectionPreview = (props) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{props.title}</h1>
            <div className='preview'>
                {props.items.filter((items,i) => i < 4)
                    .map((items,i) => {
                    return <CollectionItem name={items.name} price={items.price} imageUrl={items.imageUrl} key={items + i} />
                })}
            </div>
        </div>
    )
}

export default collectionPreview