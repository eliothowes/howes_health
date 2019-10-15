import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

import '../../style/DashboardWidget.css'

const DashboardWidget = ({ widget, widget_click,  display_widget_in_dashboard, patient }) => {

    const handleClick = (widgetName) => {
        widget_click(widgetName)
        display_widget_in_dashboard(widgetName)
    }

    const setUP = () => {
        debugger
    }

    return (
        <div className={`widget`} >
            <div className='header'>
                <div className='icon-type-container'>
                    <h5 className='widget-type'>{widget.type}</h5>
                    <img src={widget.image} alt={`${widget.name} icon`} className='dashboard-widget-icon'/>
                </div>
                <div className='close-btn-container'>
                    <span onClick={event => handleClick(widget.name)} className='widget-close-btn' >X</span>
                </div>
            </div>
            <div>
                <h3>{patient.patient_health_data.vital_signs.heart_rate.value ? patient.patient_health_data.vital_signs.heart_rate[0].value : `HR not Recorded`}</h3>
            </div>
        </div>
    )
}

export default connect(null, actions)(DashboardWidget)