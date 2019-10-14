import React from 'react'
import { useEffect } from 'react'
import API from '../API'

import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

import '../style/Main.css'

const Main = (props) => {

    useEffect(() => {
        
        if (localStorage.getItem('token') !== null) {
            API.validate()
              .then(data => {
                if (data.error) {
                  throw Error(data.error)
                } else {
                    props.log_in(data)
                }
              })
              .catch(error => {
                alert(error)
              })
        }
    }, [])

    return (
        <div className='Main'>
            <h2>Main Content</h2>
            {props.currentUser === '' ? < SignIn /> : null}
            {/* <SignUp /> */}
        </div>
    ) 
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps, actions)(Main)