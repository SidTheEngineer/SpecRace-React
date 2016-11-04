// These reducers take care of handling what happens after fetches
// are dispatched

import * as initialStates from './initialStates'

export let makes = (state = initialStates.makes, action) => {
    switch(action.type) {
        case 'RECEIVED_MAKES':
            // Return the new state/store
            return Object.assign({}, state, {
                makes: action.makes,
                received: action.received
            })

        default:
            return state
    }
}

export let models = (state = initialStates.models, action) => {
    switch(action.type) {
        case 'RECEIVED_MODELS':
            return Object.assign({}, state, {
                selectedMake: action.selectedMake,
                models: action.models,
                received: action.received
            })
        default:
            return state
    }
}

export let years = (state = initialStates.years, action) => {
    switch(action.type) {
        case 'RECEIVED_YEARS':
            return Object.assign({}, state, {
                selectedModel: action.selectedModel,
                years: action.years,
                received: action.received
            })

        default:    
            return state
    }
}

export let trims = (state = initialStates.trims, action) => {
    switch(action.type) {
        case 'RECEIVED_TRIMS':
            return Object.assign({}, state, {
                trims: action.trims,
                received: action.received
            })

        default:
            return state
    }
}

export let specs = (state = initialStates.specs, action) => {
    switch(action.type) {
        case 'RECEIVED_SPECS':
            return Object.assign({}, state, {
                specs: action.specs.specs,
                equipment: action.specs.equipment,
                received: action.received
            })

        default:
            return state
    }
}