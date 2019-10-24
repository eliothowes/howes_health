import {
    LOG_IN,
    LOG_OUT,
    GET_PATIENTS,
    SELECTED_PATIENT,
    DESELECT_PATIENT,
    CLICK_WIDGET,
    DISPLAY_WIDGET,
    UPDATE_HEALTH_DATA,
    GET_TODAYS_PATIENTS,
    SELECT_CURRENT_CONTACT,
    DESELECT_CURRENT_CONTACT,
    SET_HISTORY,
    LOADING,
    CLOSE_WIDGETS
} from './types'

export function log_in (user) {
    return {type: LOG_IN, payload: user}
}

export function log_out () {
    return {type: LOG_OUT}
}

export const get_patients = data => ({type: GET_PATIENTS, payload: data})
export const get_todays_patients = () => ({type: GET_TODAYS_PATIENTS})

export const selected_patient = patientId => ({type: SELECTED_PATIENT, payload: patientId})
export const deselect_patient = () => ({type: DESELECT_PATIENT})
export const update_patient_health_data = (id, data, category, identifier) => ({type: UPDATE_HEALTH_DATA, payload: {id, data, category, identifier}})

export const widget_click = widgetName => ({type: CLICK_WIDGET, payload: widgetName})

export const display_widget_in_dashboard = widgetName => ({type: DISPLAY_WIDGET, payload: widgetName})

export const select_current_contact = contactId => ({type: SELECT_CURRENT_CONTACT, payload: contactId})
export const deselect_current_contact = contactId => ({type: DESELECT_CURRENT_CONTACT, payload: contactId})

export const set_history = healthData => ({type: SET_HISTORY, payload: healthData})

export const start_loading = () => ({type: LOADING, payload: true})
export const stop_loading = () => ({type: LOADING, payload: false})

export const close_all_widgets = () => ({type: CLOSE_WIDGETS})