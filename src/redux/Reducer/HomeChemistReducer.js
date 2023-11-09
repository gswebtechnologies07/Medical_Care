const initialState = {
    GetPendingOrder: [],
    GetCompletedOrder: []
}

export const GetPendingOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PENDING_ORDER':
            return {
                ...state,
                GetPendingOrder: action.payload
            }
        default:
            return state
    }
}
export const GetCompletedOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMPLETED_ORDER':
            return {
                ...state,
                GetCompletedOrder: action.payload
            }
        default:
            return state
    }
}
