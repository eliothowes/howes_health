import { useState, useEffect } from 'react'

const useDate = () => {

    const [date, setDate] = useState((new Date()).toDateString())

    const setCurrentDate = () => setDate(new Date().toDateString())

    useEffect(() => {
        const interval = setInterval(setCurrentDate, 60000)
        return () => clearInterval(interval)
    }, [])

    return date
}

export default useDate