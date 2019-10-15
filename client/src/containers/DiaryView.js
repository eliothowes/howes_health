import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import useDate from '../hooks/useDate'

import '../style/DiaryView.css'


const DiaryView = ({ patients, currentUser, selected_patient}) => {

    const date = useDate()

    const handleClick = (id) => {
        selected_patient(id)
    }

    return (
        <div className='diary-view-container'>
            <div className='diary-background'>
                <div className='date'>
                    <h4>{date}</h4>
                </div>
                <div className='diary-container'>
                    <ul className='diary'>
                        {patients.map(patient => {
                            return (
                                <li className='patient-details-card' onClick={event => handleClick(patient.id)}>
                                    {/* NEED TO SORT OUT DISPLAY OF TIME!!! */}
                                    <p className='appt-time'>{patient.patient_contacts[0].date_time}</p>
                                    {/* NEED TO SORT OUT DISPLAY OF TIME!!! */}
                                    <ul className='patient-details'>
                                        <li>{`${patient.patient_details.name} (${patient.patient_details.gender})`}</li>
                                        <li>{patient.patient_details.dob}</li>
                                        <li>{patient.patient_details.hosp_num}</li>
                                        <li>{patient.patient_details.nhs_num}</li>
                                        <li>{patient.patient_details.address}</li>
                                        <li>{patient.patient_details.telephone}</li>
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapstateToProps = state => ({
    patients: state.patients,
    currentUser: state.currentUser
})

export default connect(mapstateToProps, actions)(DiaryView)