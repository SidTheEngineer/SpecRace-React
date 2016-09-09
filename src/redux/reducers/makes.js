const initialMakesState = {
    makes: [],
}

let makes = (state = initialMakesState, action) => {
    switch(action.type) {

        case 'RECEIVED_MAKES':
            // Return the new state/store
            return Object.assign({}, state, {
                makes: action.makes,
            })

        case 'FAILED_CALL':
            return state

        default:
            return state
    }
}

export default makes