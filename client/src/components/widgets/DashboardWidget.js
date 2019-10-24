import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

import useFormInput from '../../hooks/useFormInput'

import '../../style/DashboardWidget.css'
import API from '../../API'

const DashboardWidget = ({ widget, widget_click,  display_widget_in_dashboard, patient, update_patient_health_data, setShowHistory, set_history }) => {

    const formFields = {
        newData: ''
    }

    const healthData = {widget: widget, healthData: patient.patient_health_data[`${widget.category}`][`${widget.identifier}`]}

    const [formInput, handleFormChange, resetForm] = useFormInput(formFields)
    const [showForm, setShowForm] = useState(false)

    const handleFormSubmit = event => {
        event.preventDefault()
        API.createHealthData(widget.identifier, {health_data: {patient_id: patient.id, value: formInput.newData}})
        .then(data => {
            setShowForm(!showForm)           
            let health_data = parseHealthData(data)
            let patient_id = data[`${widget.identifier}`].patient_id
            update_patient_health_data(patient_id, health_data, widget.category, widget.identifier)
        })
        resetForm()
    }

    const handleClick = (widgetName) => {
        // widget_click(widgetName)
        display_widget_in_dashboard(widgetName)
    }

    const createHealthData = () => {
        if (patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0]) {
            if (widget.identifier === 'blood_pressures') {
                return `${patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0].systolic_value} / ${patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0].diastolic_value}`
            } else {
                return patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0].value
            }
        }
    }

    const parseHealthData = (data) => {
        if (Object.keys(data)[0] === 'blood_pressures') { 
            return {id: data.blood_pressures.id, systolic_value: data.blood_pressures.systolic_value, diastolic_value: data.blood_pressures.diastolic_value, date_time: data.blood_pressures.date_time }
        } else {
            return {id: data[`${widget.identifier}`].id, value: data[`${widget.identifier}`].value, date_time: data[`${widget.identifier}`].date_time }
        }
    }


    const form = () => {
        return (
            <form onSubmit={handleFormSubmit} className='data-form'>
                        {patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0] === undefined || !patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0].value ?
                        <input type="text" name='newData' className='data-form-input' value={formInput.newData} onChange={handleFormChange} placeholder={createHealthData()} required />
                        : <input type="number" name='newData' className='data-form-input' value={formInput.newData} onChange={handleFormChange} placeholder={createHealthData()} step=".01" required />
                        }
                        {/* <input type="submit" value="Submit Data"/> */}
            </form>
        )
    }

    const displayData = () => {
        return (
            <>
                <h3 className='data-value'>{createHealthData() ? createHealthData() : `No`}</h3>
            </>
        )
    }

    const handleHistoryClick = () => {
        setShowHistory(true)
        set_history(healthData)
    }

    return (
        <div className={`widget`} >
            <div className='dash-header'>
                <div className='icon-type-container'>
                    <h5 className='widget-type'>{widget.type}</h5>
                    <img src={widget.image} alt={`${widget.name} icon`} className='dashboard-widget-icon'/>
                </div>
                <div className='close-btn-container'>
                    <span onClick={event => handleClick(widget.name)} className='widget-close-btn' >X</span>
                </div>
            </div>
            <div className='data-container'>
                {showForm ? form() : displayData()}
                <h3 className='data-units'>{createHealthData() ? widget.units : `Data`}</h3>
            </div>
            <div className='dash-footer'>
                <div className='normal-values-container'>
                    {widget.norm_val && <span className='norm-vals'>Normal Values: {`${widget.norm_val} ${widget.units}`}</span>}
                </div>
                <div className='data-btn-container'>
                    <img src="https://howes-health.s3.eu-west-2.amazonaws.com/history.png" className='data-history-btn' alt="history-btn" onClick={handleHistoryClick}/>
                    <img src='https://howes-health.s3.eu-west-2.amazonaws.com/edit.png' className='data-edit-btn' alt="edit-btn" onClick={() => setShowForm(!showForm)}/>
                </div>
            </div>
        </div>
    )
}

export default connect(null, actions)(DashboardWidget)