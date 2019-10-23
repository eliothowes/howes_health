import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import useDate from '../hooks/useDate'

import '../style/DiaryView.css'


const DiaryView = ({ patients, selected_patient, select_current_contact}) => {

    const {date, dateComparison} = useDate()

    const handleClick = (patientId, contactId) => {
        selected_patient(patientId)
        select_current_contact(contactId)
    }

    const todays_appointments = (patientContacts) => {
        return patientContacts.filter(contact => contact.date_time.split(' ')[0] !== dateComparison())
        // return patientContacts.filter(contact => contact.date_time.split(' ')[0] === dateComparison())
    } 

    const todays_patients = patients => {
        if (patients !== undefined) {
            return patients.filter(patient => todays_appointments(patient.patient_contacts).length > 0 )
        }
    }

    return (
        <div className='diary-view-container'>
            <div className='diary-background'>
                <div className='date'>
                    <h4>{date}</h4>
                </div>
                <div className='diary-container'>
                    <ul className='diary'>
                    { todays_patients(patients) !== undefined || null || [] ?
                        todays_patients(patients).map(patient => {
                            return todays_appointments(patient.patient_contacts).map(contact => {
                                return (
                                    <li className='patient-details-card' onClick={event => handleClick(patient.id, contact.id)}>
                                        
                                        <p className='appt-time'>{contact.date_time.split(' ')[1]}</p>
                                        
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
                            })
                        })
                        : <li>No patient's today!</li>
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapstateToProps = state => ({
    patients: state.patients,
})

export default connect(mapstateToProps, actions)(DiaryView)