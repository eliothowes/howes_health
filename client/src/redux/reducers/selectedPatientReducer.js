import {
    SELECTED_PATIENT,
    DESELECT_PATIENT,
    LOG_OUT
  } from '../actions/types'

const selectedPatientReducer = (state = null, action) => {
    switch (action.type) {
        case SELECTED_PATIENT:
            return action.payload
        case DESELECT_PATIENT:
        case LOG_OUT:
            return null
        default:
            return state
    }
}

export default selectedPatientReducer