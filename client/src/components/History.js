import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import '../style/History.css'

const History = ({setShowHistory, history}) => {
    return (
        <div className='history-container'>
            <div className='history-content'>
            <div className='history-header'>
                <div className='history-icon-type-container'>
                    <h5 className='history-type'>{history.widget.type}</h5>
                    <img src={history.widget.image} alt='' className='history-type-icon'/>
                </div>
                <div className='history-close-btn-container'>
                    <span onClick={() => setShowHistory(false)} className='history-close-btn' >X</span>
                </div>
            </div>
            <div className='history-data-container'>
                <ul>
                    {history.healthData.map(data => {
                        return (
                            <li>
                                <ul>
                                    <li>{data.value}</li>
                                    <li>{data.date_time}</li>
                                </ul>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className='history-footer'>
                <div className='history-nav-links-container'>
                    I AM NAV LINKS
                </div>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    history: state.history
})

export default connect(mapStateToProps, actions)(History)