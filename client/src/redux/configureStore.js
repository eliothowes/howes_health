import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

const asyncDispatch = ({dispatch, getState}) => next => action => 
    typeof action === 'function' ? action(dispatch, getState) : next(action)

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(asyncDispatch),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)