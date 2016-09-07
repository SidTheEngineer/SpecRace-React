//import cache from 'memory-cache'
import axios from 'axios'

const PENDING_CALL = 'PENDING_CALL'
const SUCCESSFUL_MAKES_CALL = 'SUCCESSFUL_MAKES_CALL'
const FAILED_CALL = 'FAILED_CALL'

// Redux-Thunk allows you to return callable functions
// from actions, these functions are all given the dispatcher
// as an argument.
export function fetchMakes(url) {
    return (dispatch) => {
        dispatch({type: PENDING_CALL})
        axios.get(url)
            .then((response) => {
                dispatch({type: SUCCESSFUL_MAKES_CALL, makes: response.data.makes})
            })
            .catch((error) => {
                dispatch({type: FAILED_CALL})
            })
    }
}

// OLD
// Rename API actions
let makeActions = {

    pendingCall: function() {
        return {
            type: PENDING_CALL,
            loading: true
        }
    },

    successfulCall: function(data) {
        return {
            type: SUCCESSFUL_MAKES_CALL,
            makes: data.makes,
        }
    },

    failedCall: function() {
        return {
            type: FAILED_CALL,
        }
    }

}

export default makeActions
