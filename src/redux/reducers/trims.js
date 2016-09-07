const initialTrimsState = {
    trims: []
}

let trims = (state = initialTrimsState, action) => {
    switch(action.type) {
        case 'SUCCESSFUL_TRIMS_CALL':
            return Object.assign({}, state, {
                trims: action.trims
            })

        default:
            return state
    }
}

export default trims