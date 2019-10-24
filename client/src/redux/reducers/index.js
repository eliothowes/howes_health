import { combineReducers } from 'redux'
import currentUserReducer from './currentUserReducer'
import patientsReducer from './patientsReducer'
import selectedPatientReducer from './selectedPatientReducer'
import getWidgetsReducer from './widgetReducer'
import dashboardReducer from './dashboardReducer'
import contactsReducer from './contactsReducer'
import historyReducer from './historyReducer'
import loadingReducer from './loadingReducer'


export default combineReducers({
    currentUser: currentUserReducer,
    patients: patientsReducer,
    selectedPatient: selectedPatientReducer,
    widgets: getWidgetsReducer,
    dashboardWidgets: dashboardReducer,
    currentContact: contactsReducer,
    history: historyReducer,
    loading: loadingReducer
})

