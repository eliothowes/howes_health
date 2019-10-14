import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import '../style/Header.css'

const Header = ({ currentUser, log_out }) => {

    const handleClick = () => {
        log_out()
        localStorage.removeItem('token')
    }

    return (
        <div className='Header'>
            {currentUser 
            ? <img className='signout-icon' src="https://howes-health.s3.eu-west-2.amazonaws.com/logout.png" alt="Logout Icon" onClick={handleClick} />
            : <img className='signup-in-icon' src="https://howes-health.s3.eu-west-2.amazonaws.com/user.png" alt="Login and Signup Icon" />
            }
        </div>
    ) 
}


const mapStateToProps = state => ({
    currentUser: state.currentUser
})


export default connect(mapStateToProps, actions)(Header)