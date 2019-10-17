import {
    LOG_IN,
    LOG_OUT,
    GET_PATIENTS,
    SELECTED_PATIENT,
    DESELECT_PATIENT,
    CLICK_WIDGET,
    DISPLAY_WIDGET,
    UPDATE_HEALTH_DATA
} from './types'

export function log_in (user) {
    return {type: LOG_IN, payload: user}
}

export function log_out () {
    return {type: LOG_OUT}
}

export const get_patients = data => ({type: GET_PATIENTS, payload: data})

export const selected_patient = patientId => ({type: SELECTED_PATIENT, payload: patientId})
export const deselect_patient = () => ({type: DESELECT_PATIENT})
export const update_patient_health_data = (id, data) => ({type: UPDATE_HEALTH_DATA, payload: {id, data}})

export const widget_click = widgetName => ({type: CLICK_WIDGET, payload: widgetName})

export const display_widget_in_dashboard = widgetName => ({type: DISPLAY_WIDGET, payload: widgetName})