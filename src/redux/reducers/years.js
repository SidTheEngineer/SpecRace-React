const initialYearsState = {
    years: [],
    selectedModel: ''
}

let years = (state = initialYearsState, action) => {
    switch(action.type) {
        case 'RECEIVED_YEARS':
            return Object.assign({}, state, {
                selectedModel: action.selectedModel,
                years: action.years
            })

        default:    
            return state
    }
}

export default years