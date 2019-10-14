import {
    GET_PATIENTS,
    LOG_OUT
  } from '../actions/types'

const patientsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PATIENTS:
            return action.payload
        case LOG_OUT:
            return []
        default:
            return state
    }
}


export default patientsReducer