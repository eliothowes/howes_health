import {
    LOG_IN,
    LOG_OUT
} from './types'

export function log_in (user) {
    return {type: LOG_IN, payload: user}
}

export function log_out () {
    return {type: LOG_OUT}
}