import { combineReducers } from 'redux'
import currentUserReducer from './currentUserReducer'
import patientsReducer from './patientsReducer'
import selectedPatientReducer from './selectedPatientReducer'
import getWidgetsReducer from './widgetReducer'
import dashboardReducer from './dashboardReducer'


export default combineReducers({
    currentUser: currentUserReducer,
    patients: patientsReducer,
    selectedPatient: selectedPatientReducer,
    widgets: getWidgetsReducer,
    dashboardWidgets: dashboardReducer
})

