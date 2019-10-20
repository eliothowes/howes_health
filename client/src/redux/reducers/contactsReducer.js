import {
    SELECT_CURRENT_CONTACT,
    DESELECT_CURRENT_CONTACT
  } from '../actions/types'

const currentContactsReducer = (state = '', action) => {
    switch (action.type) {
        case SELECT_CURRENT_CONTACT:
            return action.payload
        case DESELECT_CURRENT_CONTACT:
            return ''
        default:
            return state
    }
} 

export default currentContactsReducer