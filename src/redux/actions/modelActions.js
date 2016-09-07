const RECEIVED_MODELS = 'RECEIVED_MODELS'

export function models() {
    
}

let modelActions = {

    receivedModels: function(selectedMake, models) {
        return {
            type: RECEIVED_MODELS,
            selectedMake: selectedMake,
            models: models
        }
    },

    fetchModels: function(selectedMake) {
        
        // Redux-Thunk function gets passed dispatch and getState
        return (dispatch, getState) => {
            const state = getState()
            let make = state.makes.makes.filter((make) => {
                return make.niceName === selectedMake
            })
            dispatch({type: RECEIVED_MODELS, selectedMake: selectedMake, models: make[0].models})
        }
    }

}

export default modelActions