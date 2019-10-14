import {
    LOG_IN,
    LOG_OUT,
    GET_PATIENTS
} from './types'

// import API from '../../API'

export function log_in (user) {
    return {type: LOG_IN, payload: user}
}

export function log_out () {
    return {type: LOG_OUT}
}

export const get_patients = data => ({type: GET_PATIENTS, payload: data})

// export const get_patients = () => {
//     return dispatch => {
//         API.get_patients()
//             .then(data => {debugger

//                 dispatch({type: GET_PATIENTS, payload: data})})
//             .catch(error => console.log(error.message))
//     }
// }