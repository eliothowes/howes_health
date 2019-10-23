import { useState, useEffect } from 'react'

const useDate = () => {

    const [date, setDate] = useState((new Date()).toDateString())

    const setCurrentDate = () => setDate(new Date().toDateString())

    useEffect(() => {
        const interval = setInterval(setCurrentDate, 60000)
        return () => clearInterval(interval)
    }, [])

    const dateComparison = () => {
        return new Date(date).toLocaleDateString().split('/').reverse().join('-')
    }

    const currentYear = () => date.split(' ')[3]
    const currentMonth = () => (new Date().getMonth() + 1).toString()
    const currentDay = () => date.split(' ')[2]
    const monToSun = () => date.split(' ')[0]

    const formatDate = date => {
        const day = date.split('-')[2]
        const month = date.split('-')[1]
        const year = date.split('-')[0]
        return `${day}-${month}-${year}`
    }
    

    return {date, dateComparison, currentYear, currentMonth, currentDay, monToSun, formatDate}
}

export default useDate