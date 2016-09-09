import axios from 'axios'
import * as apiActions from './apiActions'
import * as receiveActions from './receiveActions'

// Fetch makes from external API.
export let fetchMakes = (url) => {
    return (dispatch) => {
        dispatch(apiActions.pendingCall())
        axios.get(url)
            .then((response) => {
                dispatch(receiveActions.receivedMakes(response))
            })
            .catch((error) => {
                dispatch(apiActions.failedCall())
            })
    }
}

export let fetchModels = (selectedMake) => {

    // Redux-Thunk function gets passed dispatch and getState().
    return (dispatch, getState) => {
        const state = getState()
        let make = state.makes.makes.filter((make) => {
            return make.niceName === selectedMake
        })
        dispatch(receiveActions.receivedModels(selectedMake, make[0].models))
    }
}

export let fetchYears = (selectedModel) => {
    return (dispatch, getState) => {
        const state = getState()
        let model = state.models.models.filter((model) => {
            return model.niceName === selectedModel
        })
        dispatch(receiveActions.receivedYears(selectedModel, model[0].years))
    }
}

// Fetch trims from external API.
export let fetchTrims = (url) => {
    return (dispatch) => {
        dispatch(apiActions.pendingCall)
        axios.get(url)
            .then((response) => {
                dispatch(receiveActions.receivedTrims(response))
            })
            .catch((error) => {
                dispatch(apiActions.failedCall)
            })
        }
}