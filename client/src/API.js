const signInURL = 'http://localhost:3000/signin'
const signUpURL = 'http://localhost:3000/signup'
const validateURL = 'http://localhost:3000/validate'
const patientsURL = 'http://localhost:3000/patients'
const createDataURL = (type) => `http://localhost:3000/${type}`

const get = (url, headers = null) => {
    return fetch(url, headers)
            .then(resp => resp.json())
}


const post = (url, data) => {
    return fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
                }).then(resp => resp.json())
}

const validate = () => get(validateURL, {headers: {Authorization: localStorage.getItem('token')}})
const get_patients = () => get(patientsURL, {headers: {Authorization: localStorage.getItem('token')}})
const signIn = (user) => post(signInURL, user)
const signUp = (user) => post(signUpURL, user)
const createHealthData = (type, data) => post(createDataURL(type), data)


export default {signIn, signUp, validate, get_patients, createHealthData}