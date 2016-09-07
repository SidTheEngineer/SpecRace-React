const RECEIVED_YEARS = 'RECEIVED_YEARS'

let yearActions = {

    fetchYears: function(selectedModel) {
        // Thunk
        return (dispatch, getState) => {
            const state = getState()
            let model = state.models.models.filter((model) => {
                return model.niceName === selectedModel
            })
            dispatch({type: RECEIVED_YEARS, years: model[0].years, selectedModel: selectedModel})
        }
    }

}

export default yearActions