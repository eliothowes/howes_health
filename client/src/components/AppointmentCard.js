import React from 'react'

import useDate from '../hooks/useDate'

const AppointmentCard = ({contact, patient}) => {

    const {formatDate} = useDate()

    const dob = formatDate(patient.patient_details.dob)
    const dobToDate = new Date(patient.patient_details.dob)

    const calculate_age = dob => { 
        const diff_ms = Date.now() - dob.getTime();
        const age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    return (
        <>
            <div className='appt-details-container'>
                <h3 className='appt-details'>Appointment Time: {contact.date_time.split(' ')[1]}</h3>
                <h3 className='appt-details'>Duration: {contact.duration} mins</h3>
            </div>                                       
            <ul className='patient-details'>
                <li>{`${patient.patient_details.name} (${patient.patient_details.gender})`}</li>
                <li>{`${dob} (${calculate_age(dobToDate)} years old)`}</li>
                <li>{patient.patient_details.hosp_num}</li>
                <li>{patient.patient_details.nhs_num}</li>
                <li>{patient.patient_details.address}</li>
                <li>{patient.patient_details.telephone}</li>
            </ul>
        </>
    )
}

export default AppointmentCard