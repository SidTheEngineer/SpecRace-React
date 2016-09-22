const PENDING_CALL = 'PENDING_CALL'
const FAILED_CALL = 'FAILED_CALL'

export let pendingCall = () => {
    return {
        type: PENDING_CALL,
        loading: true
    }
}

export let failedCall = () => {
    return {
        type: FAILED_CALL,
        loading: false
    }
}
