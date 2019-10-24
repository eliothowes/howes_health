import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

// import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import DiaryView from './DiaryView'
import PatientView from './PatientView'
import WidgetMenu from './WidgetMenu'
import Loading from '../components/Loading'

import API from '../API'

import '../style/Main.css'

const Main = (props) => {

  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    props.start_loading()
    if (localStorage.getItem('token') !== null) {
        API.validate()
          .then(data => {
            if (data.error) {
              throw Error(data.error)
            } else {
              props.log_in(data.clinician.details)
              props.get_patients(data.clinician.patients)
            }
          })
          .catch(error => {
            alert(error)
          })
    }
    // eslint-disable-next-line
  }, [])


  const renderMain = () => {
    if (props.currentUser === '' && !props.loading) return <SignIn setShowLoading={setShowLoading} showLoading={showLoading} />

    if (props.currentUser && !props.selectedPatient) return <DiaryView setShowLoading={setShowLoading} showLoading={showLoading}/>
    
    return <PatientView />
  }

  return (
    <div className='Main'>
      { props.loading && <Loading /> }
      {renderMain()}
      {props.selectedPatient && < WidgetMenu closeWidgetMenu={props.closeWidgetMenu} />}
    </div>
  ) 
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    selectedPatient: state.patients.find(patient => patient.id === state.selectedPatient),
    patients: state.patients,
    loading: state.loading
})

export default connect(mapStateToProps, actions)(Main)