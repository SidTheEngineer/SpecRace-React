const RECEIVED_MAKES = 'RECEIVED_MAKES'
const RECEIVED_MODELS = 'RECEIVED_MODELS'
const RECEIVED_YEARS = 'RECEIVED_YEARS'
const RECEIVED_TRIMS = 'RECEIVED_TRIMS'
const RECEIVED_SPECS = 'RECEIVED_SPECS'

export const receivedMakes = (makes) => {
    return {
        type: RECEIVED_MAKES,
        makes: makes,
        loading: false
    }
}

export const receivedModels = (selectedMake, models) => {
    return {
        type: RECEIVED_MODELS,
        selectedMake,
        models
    }
}

export const receivedYears = (selectedModel, years) => {
    return {
        type: RECEIVED_YEARS,
        selectedModel,
        years
    }
}

export const receivedTrims = (response) => {
    return {
        type: RECEIVED_TRIMS,
        trims: response.data.styles,
        loading: false
    }
}

export const receivedSpecs = (response) => {
    return {
        type: RECEIVED_SPECS,
        
    }
}