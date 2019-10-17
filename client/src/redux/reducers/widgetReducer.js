import {
    CLICK_WIDGET
  } from '../actions/types'

const widgets = [
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/heart_rate.png', name: 'heart-rate', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/blood_pressure.png', name: 'blood-pressure', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/resp_rate_icon.png', name: 'respiratory-rate', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/temp_icon.png', name: 'temperature', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/o2_sat_icon.png', name: 'o2-sats', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/broken-heart-icon.png', name: 'irregular-episodes', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/height_icon.png', name: 'height', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/weight_icon.png', name: 'weight', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/exercise_calories_icon.png', name: 'active-calories', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/food_calories_icon.png', name: 'calorie-intake', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/weightlifting_icon.png', name: 'exercise-duration', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/stairs_icon.png', name: 'flights-climbed', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/steps_icon.png', name: 'steps', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/standing_icon.png', name: 'time-standing', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/blood_glucose_icon.png', name: 'blood-glucose', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/falls_icon.png', name: 'falls', enabled: false},
    { image: 'https://howes-health.s3.eu-west-2.amazonaws.com/mindful_minutes_icon.png', name: 'mindful-minutes', enabled: false}
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