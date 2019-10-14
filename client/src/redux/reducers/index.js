import { combineReducers } from 'redux'
import currentUserReducer from './currentUserReducer'
import patientsReducer from './patientsReducer'


export default combineReducers({
    currentUser: currentUserReducer,
    patients: patientsReducer
})

