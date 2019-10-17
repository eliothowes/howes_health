import React from 'react'

import '../style/PatientSummary.css'

const PatientSummary = ({ patient }) => {

    const apptTime = patient.patient_contacts[0].date_time.split(/\d{4}-\d{2}-\d{2}T/)[1].split(/\:\d{2}\./)[0]
    const year = patient.patient_details.dob.split('-')[0]
    const month = patient.patient_details.dob.split('-')[1]
    const day = patient.patient_details.dob.split('-')[2]

    return (
        <div className='summary-card'>
             <div className='info-header'>
                <div className='avatar-container'>
                    <img src='https://howes-health.s3.eu-west-2.amazonaws.com/user.png' alt='avatar' className='avatar'/>
                </div>
            {/* NEED TO SORT OUT DISPLAY OF TIME!!! */}
                <div className='appt-time-container'>
                    <p className='summary-appt-time'>{apptTime}</p>
                </div>
            </div>
            <div className='data-container'>
                <ul className='patient-details'>
                    <li>Name: {`${patient.patient_details.name}   (${patient.patient_details.gender})`}</li>
                    <li>DOB: {`${day}-${month}-${year}`}</li>
                    <li>Hosp No:{patient.patient_details.hosp_num}</li>
                    <li>NHS No:{patient.patient_details.nhs_num}</li>
                    <li>Address: {patient.patient_details.address}</li>
                    <li>Telephone: {patient.patient_details.telephone}</li>
                </ul>
            </div>
            <div className='info-footer'>
                <div className='alert-title'>
                    <h4 >ALERTS</h4>
                </div>
                <div className='alerts'>
                    <p>Alerts will go here</p>
                </div>
            </div>
        </div>
    )
}

export default PatientSummary