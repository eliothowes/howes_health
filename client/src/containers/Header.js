import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import useWidgetMenu from '../hooks/useWidgetMenu'

import '../style/Header.css'

const Header = ({ currentUser, log_out, get_patients }) => {

    const {openWidgetMenu, closeWidgetMenu} = useWidgetMenu()

    const handleLogoutClick = () => {
        log_out()
        localStorage.removeItem('token')
    }

    const handleWidgetMenuClick = () => {
        // openWidgetMenu()
    }

    const handleDiaryViewClick = () => {
        get_patients()
    }

    return (
        <div className='Header'>
            <div className='account-links'>
            {currentUser 
            ? <img className='signout-icon' src="https://howes-health.s3.eu-west-2.amazonaws.com/logout.png" alt="Logout Icon" onClick={handleLogoutClick} />
            : <img className='signup-in-icon' src="https://howes-health.s3.eu-west-2.amazonaws.com/user.png" alt="Login and Signup Icon" />
            }
            </div>
            <div className='nav-container' >
                <div className='nav-links' >
                    <p onClick={handleDiaryViewClick} >Diary View</p>
                    <hr width="1" size="35" className='link-divider'></hr>
                    <p >Patient View</p>
                </div>
                <hr width="2" size="50" className='nav-divider'></hr>
                <div className='widget-menu'>
                    {<img className='widget-menu-icon' src="https://howes-health.s3.eu-west-2.amazonaws.com/menu-square-button-dark.png" alt="Logout Icon" onClick={handleWidgetMenuClick} />}
                </div>
            </div>
        </div>
    ) 
}


const mapStateToProps = state => ({
    currentUser: state.currentUser
})


export default connect(mapStateToProps, actions)(Header)