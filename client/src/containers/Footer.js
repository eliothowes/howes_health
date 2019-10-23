import React from 'react'
import { connect } from 'react-redux'
import '../style/Footer.css'

const Footer = ({currentUser}) => {
    return (
        <div className='Footer'>
            {currentUser &&
            <div className='clinician-details-container'>
                <p className='clinician-details'>Clinician: {currentUser.name}</p>
                <p className='clinician-details'>Username: {currentUser.username}</p>
                <p className='clinician-details'>Specialty: {currentUser.specialty}</p>
            </div>
            }
        </div>
    ) 
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps, null)(Footer)