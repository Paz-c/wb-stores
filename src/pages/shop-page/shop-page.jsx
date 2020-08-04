import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx'
import ShopData from './shop-data'
import './shop-page.scss'



class ShopPage extends Component {
    state = {
        shopData : ShopData
    }
    render(){
        
        const showShopPage = this.state.shopData.map((shopData,i) => {
            return <CollectionPreview title={shopData.title} key={shopData + i} items={shopData.items} />
        })


        return(
            <div className='shop-page'>
                {showShopPage}
            </div>
        )
    }
}

export default ShopPage