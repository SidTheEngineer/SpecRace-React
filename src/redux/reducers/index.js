import { combineReducers } from 'redux'
import * as receivedReducers from './received'

// General page stuff
const initialState = {
    currentPage: '',
    failedApiCall: false
}

let page = (state = initialState, action) => {
    switch(action.type) {
        case 'PENDING_CALL':
            return Object.assign({}, state, {
                currentPage: ''
            })

        case 'FAILED_CALL':
            return Object.assign({}, state, {
                failedApiCall: true
            })

        case 'RECEIVED_MAKES':
            return Object.assign({}, state, {
                currentPage: 'makes'
            })

        case 'RECEIVED_TRIMS':
            return Object.assign({}, state, {
                currentPage: 'trims'
            })

        case 'RECEIVED_MODELS':
            return Object.assign({
                currentPage: 'models'
            })

        case 'RECEIVED_YEARS':
            return Object.assign({}, state, {
                currentPage: 'years'
            })
        
        default:
            return state
    }
}

const rootReducer = combineReducers({
    page,
    makes: receivedReducers.makes,
    models: receivedReducers.models,
    years: receivedReducers.years,
    trims: receivedReducers.trims

})

export default rootReducer