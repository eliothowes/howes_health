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
    if (props.currentUser === '') {
        return < SignIn setShowLoading={setShowLoading} showLoading={showLoading} />
    } else {
      if (props.currentUser && !props.selectedPatient) {
        return < DiaryView setShowLoading={setShowLoading} showLoading={showLoading}/>
      } else {
        return < PatientView />
      }
    }
  }

  return (
    <div className='Main'>
      {renderMain()}
      {props.displayWidgetMenu && < WidgetMenu closeWidgetMenu={props.closeWidgetMenu} />}
    </div>
  ) 
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    selectedPatient: state.patients.find(patient => patient.id === state.selectedPatient),
    patients: state.patients
})

export default connect(mapStateToProps, actions)(Main)