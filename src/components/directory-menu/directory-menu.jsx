import React, {Component} from 'react'
import './directory-menu.styles.scss'
import MenuItems from '../menu-items/menu-items.jsx'

class Directory extends Component {
    state = {
        section : [
            {title: 'HATS', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl:'hats'},
            {title: 'SNEAKERS', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png', linkUrl:'sneakers'},
            {title: 'JACKETS', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png', linkUrl:'jackets'},
            {title: "MEN'S WEAR", imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',  height: '380px', linkUrl:'mens-wear'},
            {title: "WOMEN'S WEAR", imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', height: '380px', linkUrl:'womens-wear'}
        ]
    }

    render(){

        const mappedSection = this.state.section.map((section,i) => {
            return <MenuItems title={section.title} imageUrl={section.imageUrl} key={section.title + i} height={section.height} linkUrl={section.linkUrl} />
        })


        return(
            <div className='directory-menu'>
                {mappedSection}
            </div>
        )
    }
}

export default Directory