const initialState = {
    ForgotPassword:[],
}
export const ForgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORGOT_PASSWORD':
            return {
                ...state,
                ForgotPassword: action.payload
            }
        default:
            return state
    }
}