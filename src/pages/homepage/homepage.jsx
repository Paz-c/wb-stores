import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory-menu/directory-menu.jsx'


const homepage = (props) => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    )
}

export default homepage