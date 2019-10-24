import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

import Graph from './Graph'

import useDate from '../hooks/useDate'

import '../style/History.css'
const moment = require('moment')

const History = ({setShowHistory, history}) => {

    const {currentYear, currentMonth, currentDay} = useDate()
    const [showType, setShowType] = useState('day')

    const thisYearsData = () => history.healthData.filter(data => data.date_time.split('-')[0] === currentYear())
    const thisMonthsData = () => thisYearsData().filter(data => data.date_time.split('-')[1] === currentMonth())
    const todaysData = () => thisMonthsData().filter(data => data.date_time.split('T')[0].split('-')[2] === currentDay())

    const dateNow = moment()

    const selectedData = () => {
        if (showType === 'year' ) {
            const year = []
            const months = {'1': 'January', '2': 'February', '3': 'March', '4': 'April', '5': 'May', '6': 'June', 7: 'July', '8': 'August', '9': 'September', '10': 'October', '11': 'November', '12': 'December'}
            for (let i = 1; i <= 12; i++) {
                year.push({date_time: months[i.toString()], value: (() => {
                    const month = thisYearsData().filter(data => parseInt(data.date_time.split('T')[0].split('-')[1], 10) === i)
                    // if (!month.value) {
                    if (history.widget.identifier === 'blood_pressures' && !month.value) {
                        let systolic = month.length > 0 ? Math.round((month.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/month.length) : null
                        let diastolic = month.length > 0 ? Math.round((month.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/month.length) : null
                        return {systolic, diastolic}
                    } else {
                        return month.length > 0 ? Math.round((month.reduce((acc, currentVal) => acc + currentVal.value, 0))/month.length) : null
                    }
                })() })
            }
            return year
        } else if (showType === 'month' ) {
            const monthData = []
            for (let i = 1; i <= moment().daysInMonth(); i++ ) {
                monthData.push({date_time: i, value: (() => {
                    const day = thisMonthsData().filter(data => parseInt(data.date_time.split('T')[0].split('-')[2], 10) === i)
                    if (history.widget.identifier === 'blood_pressures' && !day.value) {
                        let systolic = day.length > 0 ? Math.round((day.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/day.length) : null
                        let diastolic = day.length > 0 ? Math.round((day.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/day.length) : null
                        return {systolic, diastolic}
                    } else{
                        return day.length > 0 ? Math.round((day.reduce((acc, currentVal) => acc + currentVal.value, 0))/day.length) : null
                    }
                })()})
            }
            return monthData
        } else if (showType === 'week' ) {
            const startOfWeek = moment().startOf('isoweek').toDate()
            const endOfWeek = moment().endOf('isoweek').toDate()
            const filteredData = thisMonthsData().filter(data => moment(data.date_time)._d >= startOfWeek && moment(data.date_time)._d <= endOfWeek)
            const week = [
                {
                    date_time: 'Monday', 
                    value: (() => {
                        const monday = filteredData.filter(data => moment(data.date_time).toString().split(' ').slice(0, 4).join(' ') === moment(startOfWeek).toString().split(' ').slice(0, 4).join(' '))
                        if (history.widget.identifier === 'blood_pressures' && !monday.value) {
                            let systolic = monday.length > 0 ? Math.round((monday.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/monday.length) : null
                            let diastolic = monday.length > 0 ? Math.round((monday.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/monday.length) : null
                            return {systolic, diastolic}
                        } else {
                            return monday.length > 0 ? Math.round((monday.reduce((acc, currentVal) => acc + currentVal.value, 0))/monday.length) : null
                        }
                    })()
                    }, 
                {
                    date_time: 'Tuesday', 
                    value: (() => {
                        const tuesday = filteredData.filter(data => moment(data.date_time).toString().split(' ').slice(0, 4).join(' ') === moment(startOfWeek).add(1, 'days').toString().split(' ').slice(0, 4).join(' '))
                        if (history.widget.identifier === 'blood_pressures' && !tuesday.value) {
                            let systolic = tuesday.length > 0 ? Math.round((tuesday.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/tuesday.length) : null
                            let diastolic = tuesday.length > 0 ? Math.round((tuesday.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/tuesday.length) : null
                            return {systolic, diastolic}
                        } else {
                            return tuesday.length > 0 ? Math.round((tuesday.reduce((acc, currentVal) => acc + currentVal.value, 0))/tuesday.length) : null
                        }
                    })()
                    },  
                {
                    date_time: 'Wednesday', 
                    value: (() => {
                        const wednesday = filteredData.filter(data => moment(data.date_time).toString().split(' ').slice(0, 4).join(' ') === moment(startOfWeek).add(2, 'days').toString().split(' ').slice(0, 4).join(' '))
                        if (history.widget.identifier === 'blood_pressures' && !wednesday.value) {
                            let systolic = wednesday.length > 0 ? Math.round((wednesday.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/wednesday.length) : null
                            let diastolic = wednesday.length > 0 ? Math.round((wednesday.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/wednesday.length) : null
                            return {systolic, diastolic}
                        } else {
                            return wednesday.length > 0 ? Math.round((wednesday.reduce((acc, currentVal) => acc + currentVal.value, 0))/wednesday.length) : null
                        }
                    })()   
                    },  
                {
                    date_time: 'Thursday', 
                    value: (() => {
                        const thursday = filteredData.filter(data => moment(data.date_time).toString().split(' ').slice(0, 4).join(' ') === moment(startOfWeek).add(3, 'days').toString().split(' ').slice(0, 4).join(' '))
                        if (history.widget.identifier === 'blood_pressures' && !thursday.value) {
                            let systolic = thursday.length > 0 ? Math.round((thursday.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/thursday.length) : null
                            let diastolic = thursday.length > 0 ? Math.round((thursday.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/thursday.length) : null
                            return {systolic, diastolic}
                        } else {
                            return thursday.length > 0 ? Math.round((thursday.reduce((acc, currentVal) => acc + currentVal.value, 0))/thursday.length) : null
                        }
                    })()   
                    },
                {
                    date_time: 'Friday', 
                    value: (() => {
                        const friday = filteredData.filter(data => moment(data.date_time).toString().split(' ').slice(0, 4).join(' ') === moment(startOfWeek).add(4, 'days').toString().split(' ').slice(0, 4).join(' '))
                        if (history.widget.identifier === 'blood_pressures' && !friday.value) {
                            let systolic = friday.length > 0 ? Math.round((friday.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/friday.length) : null
                            let diastolic = friday.length > 0 ? Math.round((friday.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/friday.length) : null
                            return {systolic, diastolic}
                        } else {
                            return friday.length > 0 ? Math.round((friday.reduce((acc, currentVal) => acc + currentVal.value, 0))/friday.length) : null
                        }
                    })()
                    },
                {
                    date_time: 'Saturday', 
                    value: (() => {
                        const saturday = filteredData.filter(data => moment(data.date_time).toString().split(' ').slice(0, 4).join(' ') === moment(startOfWeek).add(5, 'days').toString().split(' ').slice(0, 4).join(' '))
                        if (history.widget.identifier === 'blood_pressures' && !saturday.value) {
                            let systolic = saturday.length > 0 ? Math.round((saturday.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/saturday.length) : null
                            let diastolic = saturday.length > 0 ? Math.round((saturday.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/saturday.length) : null
                            return {systolic, diastolic}
                        } else {
                            return saturday.length > 0 ? Math.round((saturday.reduce((acc, currentVal) => acc + currentVal.value, 0))/saturday.length) : null
                        }
                    })()
                    },
                {
                    date_time: 'Sunday', 
                    value: (() => {
                        const sunday = filteredData.filter(data => moment(data.date_time)._d === moment(data.date_time).toString().split(' ').slice(0, 4).join(' ') === moment(startOfWeek).add(6, 'days').toString().split(' ').slice(0, 4).join(' '))
                        if (history.widget.identifier === 'blood_pressures' && !sunday.value) {
                            let systolic = sunday.length > 0 ? Math.round((sunday.reduce((acc, currentVal) => acc + currentVal.systolic_value, 0))/sunday.length) : null
                            let diastolic = sunday.length > 0 ? Math.round((sunday.reduce((acc, currentVal) => acc + currentVal.diastolic_value, 0))/sunday.length) : null
                            return {systolic, diastolic}
                        } else {
                            return sunday.length > 0 ? Math.round((sunday.reduce((acc, currentVal) => acc + currentVal.value, 0))/sunday.length) : null
                        }
                    })()
                    },
            ]
            return week
        } else {
            const sortedData = todaysData().sort((a, b) => a.date_time.localeCompare(b.date_time))
            if (history.widget.identifier === 'blood_pressures' && !sortedData.value) {
                return sortedData.map(data => ({date_time: data.date_time.split('T')[1].split('.')[0], value: {systolic: data.systolic_value, diastolic: data.diastolic_value}}))
            } else {
                return sortedData.map(data => ({...data, date_time: data.date_time.split('T')[1].split('.')[0]}))
            }
        }
    }

    const dataToDisplay = () => {
        if (history.widget.identifier === 'blood_pressures') {
            const systolic = []
            const diastolic = []
            // eslint-disable-next-line
            selectedData().map(data => {
                systolic.push({x: `${data.date_time}`, y: data.value.systolic})
                diastolic.push({x: `${data.date_time}`, y: data.value.diastolic})
            })
            return [{id: 'Diastolic', data: diastolic}, {id: 'Systolic', data: systolic}]
        } else {
            const graphData = []
            selectedData().map(data => graphData.push({x: `${data.date_time}`, y: data.value}))
            return [{id: history.widget.type, data: graphData}]
        }
    }

    const xAxis = () =>{
        if (showType === 'year' ) {
            return 'Month'
        } else if (showType === 'month' ) {
            return 'Day'
        } else if (showType === 'week' ) {
            return 'Day'
        } else {
            return  'Time HH:MM:SS'
        }
    }
    
    const metaData = () => {
        const meta = selectedData().filter(data => data.value !== null)
        const average = meta.length > 0 ? Math.round((meta.reduce((acc, currentVal) => acc + currentVal.value, 0))/meta.length) : 'No Data'
        const max = meta.length > 0 ? Math.max(...meta.map(data => data.value)) : 'No Data'
        const min = meta.length > 0 ? Math.min(...meta.map(data => data.value)) : 'No Data'
        return {average, max, min}
    }

    const bpMetaData = () => {
        const syst = selectedData().filter(data => data.value.systolic !== null)
        const diast = selectedData().filter(data => data.value.diastolic !== null)
        const average = syst.length && diast.length > 0 ? `${Math.round((syst.reduce((acc, currentVal) => acc + currentVal.value.systolic, 0))/syst.length)} / ${Math.round((diast.reduce((acc, currentVal) => acc + currentVal.value.diastolic, 0))/diast.length)}` : 'No Data'
        const max = syst.length && diast.length > 0 ? `${Math.max(...syst.map(data => data.value.systolic))} / ${Math.max(...diast.map(data => data.value.diastolic))}` : 'No Data'
        const min = syst.length && diast.length > 0 ? `${Math.min(...syst.map(data => data.value.systolic))} / ${Math.min(...diast.map(data => data.value.diastolic))}` : 'No Data'
        return {average, max, min}
    }

    const displayMeta = () => {
        if (history.widget.identifier === 'blood_pressures') {
            return (
                <>
                <h3>Average: {bpMetaData().average !== 'No Data' ? `${bpMetaData().average} ${history.widget.units}` : bpMetaData().average}</h3>
                <h3>Min: {bpMetaData().min !== 'No Data' ? `${bpMetaData().min} ${history.widget.units}` : bpMetaData().min}</h3>
                <h3>Max: {bpMetaData().max !== 'No Data' ? `${bpMetaData().max} ${history.widget.units}` : bpMetaData().max}</h3>
                </>
            )
        } else {
            return (
                <>
                <h3>Average: {metaData().average !== 'No Data' ? `${metaData().average} ${history.widget.units}` : metaData().average}</h3>
                <h3>Min: {metaData().min !== 'No Data' ? `${metaData().min} ${history.widget.units}` : metaData().min}</h3>
                <h3>Max: {metaData().max !== 'No Data' ? `${metaData().max} ${history.widget.units}` : metaData().max}</h3>
                </>
            )
        }
    }

    const title = () => {
        if (showType === 'year' ) {
            return dateNow.format('YYYY')
        } else if (showType === 'month' ) {
            return dateNow.format('MMMM')
        } else if (showType === 'week' ) {
            return `Week ${dateNow.startOf('isoweek').format('DD-MM-YYYY')} - ${dateNow.endOf('isoweek').format('DD-MM-YYYY')}`
        } else {
            return  'Today'
        }
    }

    return (
        <div className='history-container'>
            <div className='history-content'>
            <div className='history-header'>
                <div className='history-icon-type-container'>
                    <h5 className='history-type'>{history.widget.type}</h5>
                    <img src={history.widget.image} alt='widget icon' className='history-type-icon'/>
                </div>
                <div className='history-close-btn-container'>
                    <span onClick={() => setShowHistory(false)} className='history-close-btn' >X</span>
                </div>
            </div>
            <div className='history-data-container'>
                <div className='history-title'>
                    {title()}
                </div>
                <div className='history-graph'>
                    <Graph data={dataToDisplay()} widget={history.widget} xAxis={xAxis}/>
                </div>
                <div className='history-metadata'>
                    {displayMeta()}
                </div>
            </div>
            <div className='history-footer'>
                <div className='history-nav-links-container'>
                    <button onClick={() => setShowType('day')} className='history-btn'>Day</button>
                    <button onClick={() => setShowType('week')} className='history-btn'>Week</button>
                    <button onClick={() => setShowType('month')} className='history-btn'>Month</button>
                    <button onClick={() => setShowType('year')} className='history-btn'>Year</button>
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