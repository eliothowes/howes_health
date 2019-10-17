import {
    GET_PATIENTS,
    LOG_OUT,
    UPDATE_HEALTH_DATA
  } from '../actions/types'

const patientsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PATIENTS:
            return action.payload
        case UPDATE_HEALTH_DATA:
            return state.map(patient => {
                // Get rid of hard coding
                if (patient.id === action.payload.id) {
                    return {...patient, 
                                patient_health_data: {
                                    ...patient.patient_health_data,
                                    vital_signs: {
                                        ...patient.patient_health_data.vital_signs,
                                        heart_rate: [action.payload.data, ...patient.patient_health_data.vital_signs.heart_rate]
                            }}} 
                } else {
                    return patient
                }
            })
        case LOG_OUT:
            return []
        default: 
            return state
    }
}

   
export default patientsReducer