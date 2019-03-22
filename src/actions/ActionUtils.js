function request(type, payload) {
    return {
        type: type,
        payload: payload
    }
}
function success(type, payload) {
    return {
        type: type,
        payload: payload
    }
}
function failure(type, payload) {
    return {
        type: type,
        payload: payload
    }
}

export const ActionUtils = {
    request,
    success,
    failure
};