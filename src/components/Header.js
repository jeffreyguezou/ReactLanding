import React from 'react'
import classes from './Header.module.css'
import logo from '../Assets/logo.jpeg'
import Sticky from 'react-stickynode'

function Header() {
    return (
        <Sticky enabled={true}>
            <div className={classes.header}>
                <img src={logo} alt="logo"></img>
                <span>Contact: +91 - 9876543210</span>
            </div>            
        </Sticky>
    )

}
export default Header