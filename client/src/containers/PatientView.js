import React, { useState } from 'react'
import { connect } from 'react-redux'

import PatientSummary from '../components/PatientSummary'
import DashboardWidget from '../components/widgets/DashboardWidget'
import History from '../components/History'

import '../style/PatientView.css'

const PatientView = ({ patient, widgets, currentContact}) => {

    const [showHistory, setShowHistory] = useState(false)

    return (
        <div className='dashboard-container'>
            {patient && <PatientSummary patient={patient} contact={patient.patient_contacts.find(contact => contact.id === currentContact)}/>}
            {
                widgets.map(widget => <DashboardWidget key={widget.name} widget={widget} patient={patient} setShowHistory={setShowHistory} />)
            }
            {showHistory && <History setShowHistory={setShowHistory} />}
        </div>
    )
}

const mapStateToProps = state => ({
    patient: state.patients.find(patient => patient.id === state.selectedPatient),
    widgets: state.dashboardWidgets.filter(widget => widget.enabled),
    currentContact: state.currentContact,
    history: state.history
})

export default connect(mapStateToProps, null)(PatientView)
