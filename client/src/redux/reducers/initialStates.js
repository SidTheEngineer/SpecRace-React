// Pieces of state to be used for their respective reducers.

export const initialPage = {
    currentPage: '',
    failedApiCall: false,
    loading: false
}

export const makes = {
    makes: [],
    received: false
}

export const models = {
    models: [],
    received: false,
    selectedMake: ''
}

export const years = {
    years: [],
    received: false,
    selectedModel: ''
}

export const trims = {
    trims: [],
    received: false
}

export const specs = {
    specs: [],
    equipment: [],
    receivedSpecs: false,
    receivedEquipment: false,
}