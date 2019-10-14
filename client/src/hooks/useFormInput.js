import { useState } from 'react'

const useFormInput = (formFields) => {
    const [formInput, setFormInput] = useState(formFields)

    const handleFormChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormInput({...formInput, [name]: value})
    }

    const resetForm = () => {
        setFormInput(formFields)
    }

    return [formInput, handleFormChange, resetForm]
}

export default useFormInput