import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

import useFormInput from '../../hooks/useFormInput'

import '../../style/DashboardWidget.css'
import API from '../../API'

const DashboardWidget = ({ widget, widget_click,  display_widget_in_dashboard, patient, update_patient_health_data }) => {

    const formFields = {
        newData: '',
    }

    const [formInput, handleFormChange, resetForm] = useFormInput(formFields)
    const  [showForm, setShowForm] = useState(false)

    const handleFormSubmit = event => {
        event.preventDefault()
        API.createHealthData(widget.identifier, {health_data: {patient_id: patient.id, value: formInput.newData}})
        .then(data => {
            setShowForm(!showForm)
            let heart_rate = {id: data.heart_rate.id, value: data.heart_rate.value, date_time: data.heart_rate.date_time }
            let patient_id = data.heart_rate.patient_id
            update_patient_health_data(patient_id, heart_rate)
        })
        setShowForm(!showForm)
        resetForm()
    }

    const handleClick = (widgetName) => {
        widget_click(widgetName)
        display_widget_in_dashboard(widgetName)
    }

    const data = patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0] ? 
                    patient.patient_health_data[`${widget.category}`][`${widget.identifier}`] === 'heart_rate' ? 
                        `${patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0].systolic} / ${patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0].diastolic}`
                        : patient.patient_health_data[`${widget.category}`][`${widget.identifier}`][0].value 
                            : null


    const form = () => {
        return (
            <form onSubmit={handleFormSubmit} className='data-form'>
                        <input type="number" name='newData' className='data-form-input' value={formInput.newData} onChange={handleFormChange} placeholder={data} required />
                        {/* <input type="submit" value="Submit Data"/> */}
            </form>
        )
    }

    const displayData = () => {
        return (
            <>
                <h3 className='data-value'>{data ? data : `No`}</h3>
                {/* <h3 className='data-units'>{data ? widget.units : `Data`}</h3> */}
            </>
        )
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
                <h3 className='data-units'>{data ? widget.units : `Data`}</h3>
            </div>
            <div className='dash-footer'>
                <div className='normal-values-container'>
                    {widget.norm_val && <span className='norm-vals'>Normal Values: {`${widget.norm_val} ${widget.units}`}</span>}
                </div>
                <div className='edit-btn-container'>
                    <img src='https://howes-health.s3.eu-west-2.amazonaws.com/edit.png' className='data-edit-btn' onClick={() => setShowForm(!showForm)}/>
                </div>
            </div>
        </div>
    )
}

export default connect(null, actions)(DashboardWidget)