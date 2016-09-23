import axios from 'axios'
import * as apiActions from './apiActions'
import * as receiveActions from './receiveActions'

// These are all pretty much Redux-Thunk oriented action creators that
// make calls to the external API and dispatch other actions around
// These calls

export const fetchMakes = (url) => {
    return (dispatch) => {
        dispatch(apiActions.pendingCall())
        axios.get(url)
            .then((response) => {
                // Response.data will contain the array of makes that was sent
                // from server-side.
                dispatch(receiveActions.receivedMakes(response.data))
            })
            .catch((error) => {
                dispatch(apiActions.failedCall())
            })
    }
}

export const fetchModels = (selectedMake) => {
    return (dispatch, getState) => {
        const state = getState()
        let make = state.makes.makes.filter((make) => {
            return make.niceName === selectedMake
        })
        dispatch(receiveActions.receivedModels(selectedMake, make[0].models))
    }
}

export const fetchYears = (selectedModel) => {
    return (dispatch, getState) => {
        const state = getState()
        let model = state.models.models.filter((model) => {
            return model.niceName === selectedModel
        })
        dispatch(receiveActions.receivedYears(selectedModel, model[0].years))
    }
}

export const fetchTrims = (url) => {
    return (dispatch) => {
        dispatch(apiActions.pendingCall())
        axios.get(url)
            .then((response) => {
                dispatch(receiveActions.receivedTrims(response.data))
            })
            .catch((error) => {
                dispatch(apiActions.failedCall())
            })
        }
}

export const fetchSpecs = (url) => {
    return (dispatch) => {
        dispatch(apiActions.pendingCall())
        axios.get(url)
            .then((response) => {

            })
            .catch((error) => {
                
            })
    }
}