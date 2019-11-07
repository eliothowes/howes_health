import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions' 

import API from '../API'

import '../style/SignIn.css'

import useFormInput from '../hooks/useFormInput'

const SignIn = props => {

    const formFields = {
        username: '',
        password: '',
    }

    const [formInput, handleFormChange, resetForm] = useFormInput(formFields)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        props.start_loading()
        API.signIn({clinician: formInput})
            .then(data => {
                if (data.error) {
                    throw Error(data.error)
                } else {
                    props.log_in(data.clinician.details)
                    localStorage.setItem('token', data.jwt)
                    props.start_loading()
                    props.get_patients(data.clinician.patients)
                }
            })
            .catch(error => {
                props.stop_loading()
                alert(error)
            })
        resetForm()
    }
    
    useEffect(() => {
        props.stop_loading()
    // eslint-disable-next-line 
    }, []) 

    return (
        <form className='signin-form' onSubmit={handleFormSubmit} >
            <div className='signin-form-container' >
                <div className='signin-form-inner' >
                    <h3>Sign In</h3>
                    <input type="text" name='username' id='username' placeholder='Username' value={formInput.username} onChange={handleFormChange} required />
                    <input type="password" name="password" id="password" placeholder='Password' value={formInput.password} onChange={handleFormChange} required />
                    <input type="submit" value="Sign In" className='btn'/>
                </div>
            </div>
        </form>
    )
}

export default connect(null, actions)(SignIn)