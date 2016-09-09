import { combineReducers } from 'redux'
import makes from './makes'
import models from './models'
import years from './years'
import trims from './trims'

// General page stuff
const initialState = {
    currentPage: '',
    loading: false
}

let page = (state = initialState, action) => {
    switch(action.type) {
        case 'PENDING_CALL':
            return Object.assign({}, state, {
                loading: true,
                currentPage: ''
            })

        case 'FAILED_CALL':
            return Object.assign({}, state, {
                loading: false
            })

        case 'RECEIVED_MAKES':
            return Object.assign({}, state, {
                loading: false,
                currentPage: 'makes'
            })

        case 'RECEIVED_TRIMS':
            return Object.assign({}, state, {
                loading: false,
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
    makes,
    models,
    years,
    trims,
    page
})

export default rootReducer