import {
    DISPLAY_WIDGET,
    CLOSE_WIDGETS
  } from '../actions/types'
  
  const widgets = [
    { name: 'heart-rate', category: 'vital_signs', identifier: 'heart_rate', type: 'HR', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/heartbeat.png', units: 'bpm', norm_val: '60-100', enabled: false},
    { name: 'blood-pressure', category: 'vital_signs', identifier: 'blood_pressures', type: 'BP', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/BP.png', units: 'mmHg', norm_val: '90/60 - 140-90', enabled: false},
    { name: 'respiratory-rate', category: 'vital_signs', identifier: 'resp_rates', type: 'RR', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/resp_rate.png', units: 'bpm', norm_val: '12-18', enabled: false},
    { name: 'temperature', category: 'vital_signs', identifier: 'temps', type: '°C', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/temp.png', units: '°C', norm_val: '36.5 - 37.2', enabled: false},
    { name: 'o2-sats', category: 'vital_signs', identifier: 'o2_sats', type: 'SpO2', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/oxygen.png', units: '%', norm_val: '95-100', enabled: false},
    { name: 'irregular-episodes', category: 'vital_signs', identifier: 'irreg_episodes', type: 'Irreg HR', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/broken-heart.png', units: 'episodes', norm_val: '', enabled: false},
    { name: 'height', category: 'anthropometrics', identifier: 'height', type: 'Height', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/height.png', units: 'cm', norm_val: '', enabled: false},
    { name: 'weight', category: 'anthropometrics', identifier: 'weight', type: 'Weight', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/weight.png', units: 'kg', norm_val: '', enabled: false},
    { name: 'active-calories', category: 'energy_balance', identifier: 'active_calories', type: '-ve Cal', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/exercise_calories.png', units: 'kCal', norm_val: '', enabled: false},
    { name: 'calorie-intake', category: 'energy_balance', identifier: 'calorie_intake', type: '+ve Cal', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/food_calories_new.png', units: 'kCal', norm_val: '', enabled: false},
    { name: 'exercise-duration', category: 'exercise', identifier: 'exercise_duration', type: 'Exs', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/weightlifting.png', units: 'mins', norm_val: '30mins 5 times/week', enabled: false},
    { name: 'flights-climbed', category: 'exercise', identifier: 'flights_climbed', type: 'Stairs', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/stairs.png', units: 'flights', norm_val: '', enabled: false},
    { name: 'steps', category: 'exercise', identifier: 'steps', type: 'Steps', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/steps.png', units: 'steps', norm_val: '10000', enabled: false},
    { name: 'time-standing', category: 'exercise', identifier: 'time_standing', type: 'Time Stood', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/standing.png', units: 'mins', norm_val: '', enabled: false},
    { name: 'blood-glucose', category: 'other', identifier: 'blood_glucose', type: 'Blood Glucose', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/blood_glucose.png', units: 'mmol/L', norm_val: '4.0 - 7.8', enabled: false},
    { name: 'falls', category: 'other', identifier: 'falls', type: 'Falls', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/fall.png', units: 'falls', norm_val: '', enabled: false},
    { name: 'mindful-minutes', category: 'other', identifier: 'mindful_minutes', type: 'Mindful Mins', image: 'https://howes-health.s3.eu-west-2.amazonaws.com/mindfulness.png', units: 'mins', norm_val: '', enabled: false},
    
] 

const dashboardReducer = (state = widgets, action) => {
    switch (action.type) {
        case DISPLAY_WIDGET:
            return state.map(widget => widget.name === action.payload ? {...widget, enabled: !widget.enabled} : widget )
        case CLOSE_WIDGETS:
            return state.map(widget => ({...widget, enabled: false}))
        default:
            return state
    }
}

export default dashboardReducer