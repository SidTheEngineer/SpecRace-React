import axios from 'axios'

const PENDING_CALL = 'PENDING_CALL'
const FAILED_CALL = 'FAILED_CALL'
const SUCCESSFUL_TRIMS_CALL = 'SUCCESSFUL_TRIMS_CALL'

let trimActions = {

    fetchTrims: function(url) {
        // Thunk
        return (dispatch) => {
            dispatch({type: PENDING_CALL})
            axios.get(url)
                .then((response) => {
                    dispatch({type: SUCCESSFUL_TRIMS_CALL, trims: response.data.styles})
                })
                .catch((error) => {
                    dispatch({type: FAILED_CALL})
                })
        }
    }

}

export default trimActions