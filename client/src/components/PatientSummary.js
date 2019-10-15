import React, { Fragment } from 'react'

import '../style/PatientSummary.css'

const PatientSummary = ({ patient }) => {
    return (
        <div className='summary-card'>
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
        </div>
    )
}

export default PatientSummary