const initialState = {
    GetOrderPlace: []
}

export const OrderPlaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER_PLACE':
            return {
                ...state,
                GetOrderPlace: action.payload
            }
        default:
            return state
    }
}
