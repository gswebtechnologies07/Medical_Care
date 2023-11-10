const initialState = {
    GetOrderPlace: [],
    EditOrderProfile: []
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

export const EditOrderPlaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_ORDER_PLACE':
            return {
                ...state,
                EditOrderProfile: action.payload
            }
        default:
            return state
    }
}
