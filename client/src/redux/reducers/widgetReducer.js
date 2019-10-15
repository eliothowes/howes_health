import {
    CLICK_WIDGET
  } from '../actions/types'

const widgets = [
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/heart_rate.png', name: 'heart-rate', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/blood_pressure.png', name: 'blood-pressure', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/resp_rate_icon.png', name: 'respiratory-rate', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/temp_icon.png', name: 'temperature', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/o2_sat_icon.png', name: 'o2-sats', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/broken-heart-icon.png', name: 'irregular-episodes', enabled: false}
] 

const getWidgetsReducer = (state = widgets, action) => {
    switch (action.type) {
        case CLICK_WIDGET:
            return state.map(widget => widget.name === action.payload ? {...widget, enabled: !widget.enabled} : widget )
        default:
            return state
    }
}

export default getWidgetsReducer