const RECEIVED_MAKES = 'RECEIVED_MAKES'
const RECEIVED_MODELS = 'RECEIVED_MODELS'
const RECEIVED_YEARS = 'RECEIVED_YEARS'
const RECEIVED_TRIMS = 'RECEIVED_TRIMS'

export let receivedMakes = (response) => {
    return {
        type: RECEIVED_MAKES,
        makes: response.data.makes
    }
}

export let receivedModels = (selectedMake, models) => {
    return {
        type: RECEIVED_MODELS,
        selectedMake,
        models
    }
}

export let receivedYears = (selectedModel, years) => {
    return {
        type: RECEIVED_YEARS,
        selectedModel,
        years
    }
}

export let receivedTrims = (response) => {
    return {
        type: RECEIVED_TRIMS,
        trims: response.data.styles
    }
}