import { createStore, combineReducers, applyMiddleware } from "redux"
import soundsReducer from '../reducers/sounds'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

export default () => {
    return createStore(
        combineReducers({
            sounds: soundsReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk))
};