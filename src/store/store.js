import { createStore, combineReducers, applyMiddleware } from "redux"
import soundsReducer from '../reducers/sounds'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default () => {
    return createStore(
        combineReducers({
            sounds: soundsReducer,
            filters: filtersReducer
        }), reduxDevTools,
        applyMiddleware(thunk))
};