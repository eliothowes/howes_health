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
        API.signIn({clinician: formInput})
            .then(data => {
                if (data.error) {
                    props.setShowLoading(false)
                    throw Error(data.error)
                } else {
                    props.log_in(data.clinician.details)
                    localStorage.setItem('token', data.jwt)
                    props.get_patients(data.clinician.patients)
                }
            })
            .catch(error => alert(error))
        resetForm()
        props.setShowLoading(true)
    }
    
    return (
        <form className='signin-form' onSubmit={handleFormSubmit} >
            <div className='signin-form-container' >
                <div className='signin-form-inner' >
                    <h3>Sign In</h3>
                    <label>Username</label>
                    <input type="text" name='username' id='username' value={formInput.username} onChange={handleFormChange} required />

                    <label>Password</label>
                    <input type="password" name="password" id="password" value={formInput.password} onChange={handleFormChange} required />

                    <input type="submit" value="Sign In"/>
                </div>
            </div>
        </form>
    )
}

export default connect(null, actions)(SignIn)