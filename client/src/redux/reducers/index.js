import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as receivedReducers from './received'

// General page stuff
const initialState = {
    currentPage: '',
    failedApiCall: false,
    loading: false
}

let page = (state = initialState, action) => {
    switch(action.type) {
        case 'PENDING_CALL':
            return Object.assign({}, state, {
                currentPage: '',
                loading: action.loading
            })

        case 'FAILED_CALL':
            return Object.assign({}, state, {
                failedApiCall: true
            })

        case 'RECEIVED_MAKES':
            return Object.assign({}, state, {
                currentPage: 'makes',
                loading: action.loading
            })

        case 'RECEIVED_TRIMS':
            return Object.assign({}, state, {
                currentPage: 'trims',
                loading: action.loading
            })

        case 'RECEIVED_MODELS':
            return Object.assign({
                currentPage: 'models'
            })

        case 'RECEIVED_YEARS':
            return Object.assign({}, state, {
                currentPage: 'years'
            })

        case 'RECEIVED_SPECS':
            return Object.assign({}, state, {
                currentPage: 'specs',
                loading: action.loading
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
    trims: receivedReducers.trims,
    specs: receivedReducers.specs,
    routing: routerReducer

})

export default rootReducer