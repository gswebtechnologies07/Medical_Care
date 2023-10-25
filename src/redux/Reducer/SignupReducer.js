const initialState = {
    Signup: [],
}
export const SignupReducer = (state = initialState, action) => {
    switch (action?.type) {
        case "SIGNUP":
            return {
                ...state,
                Signup: action.payload
            }
        default:
            return state
    }
}