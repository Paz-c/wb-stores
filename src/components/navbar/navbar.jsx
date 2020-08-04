import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo/logo.svg'
import './navbar.scss'

const header = (props) => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to='/'>
                    <Logo className='logo' />
                </Link>
            </div>
            <div className='options'>
                <Link to='/shop-page' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                <Link to='/signin' className='option'>SIGN IN</Link>
                <Link to='/more' className='option'>MORE</Link>
            </div>
        </div>
    )
}

export default header