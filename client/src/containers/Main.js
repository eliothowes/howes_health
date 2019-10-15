import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

// import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import DiaryView from './DiaryView'
import PatientView from './PatientView'
import WidgetMenu from './WidgetMenu'

import API from '../API'

import '../style/Main.css'

const Main = (props) => {

  useEffect(() => {
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
  }, [])

  return (
    <div className='Main'>
      { props.currentUser &&
      <div className='clinician-details-container'>
        <ul className='clinician-details' >
          <li>Clinician: {props.currentUser.name}</li>
          <li>Username: {props.currentUser.username}</li>
          <li>Specialty: {props.currentUser.specialty}</li>
        </ul>
      </div>
      }
      {props.currentUser === '' ? < SignIn /> : null}
      {/* <SignUp /> */}
      {props.currentUser && !props.selectedPatient ? < DiaryView /> : < PatientView />}
      {props.displayWidgetMenu && < WidgetMenu />}
    </div>
  ) 
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    selectedPatient: state.patients.find(patient => patient.id === state.selectedPatient)
})

export default connect(mapStateToProps, actions)(Main)