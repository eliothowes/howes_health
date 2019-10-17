import React from 'react'
import { connect } from 'react-redux'
import PatientSummary from '../components/PatientSummary'

import DashboardWidget from '../components/widgets/DashboardWidget'

import '../style/PatientView.css'

const PatientView = ({ patient, widgets }) => {

    return (
        <div className='dashboard-container'>
            {patient && <PatientSummary patient={patient}/>}
            {
                widgets.map(widget => <DashboardWidget key={widget.name} widget={widget} patient={patient} />)
            }
            
        </div>
    )
}

const mapStateToProps = state => ({
    patient: state.patients.find(patient => patient.id === state.selectedPatient),
    widgets: state.dashboardWidgets.filter(widget => widget.enabled)
})

export default connect(mapStateToProps, null)(PatientView)
