const initialModelsState = {
    models: [],
    selectedMake: ''
}

let models = (state = initialModelsState, action) => {
    switch(action.type) {
        case 'RECEIVED_MODELS':
            return Object.assign({}, state, {
                selectedMake: action.selectedMake,
                models: action.models
            })
        default:
            return state
    }
}

export default models