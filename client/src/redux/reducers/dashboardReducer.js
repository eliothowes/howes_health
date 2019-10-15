import {
    DISPLAY_WIDGET
  } from '../actions/types'


  const widgets = [
    { name: 'heart-rate', type: 'HR', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/heartbeat.png', units: 'bpm', norm_val: '60-100', enabled: false},
    { name: 'blood-pressure', type: 'BP', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/BP.png', units: 'mmHg', norm_val: '90/60 - 140-90', enabled: false},
    { name: 'respiratory-rate', type: 'RR', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/resp_rate.png', units: 'bpm', norm_val: '12-18', enabled: false},
    { name: 'temperature', type: '°C', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/temp.png', units: '°C', norm_val: '36.5 - 37.2', enabled: false},
    { name: 'o2-sats', type: 'SpO2', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/oxygen.png', units: '%', norm_val: '95-100', enabled: false},
    { name: 'irregular-episodes', type: 'Irreg HR', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/broken-heart.png', units: '', norm_val: '', enabled: false},
    
] 

const dashboardReducer = (state = widgets, action) => {
    switch (action.type) {
        case DISPLAY_WIDGET:
            return state.map(widget => widget.name === action.payload ? {...widget, enabled: !widget.enabled} : widget )
        default:
            return state
    }
}

export default dashboardReducer