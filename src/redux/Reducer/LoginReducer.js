const initialState = {
    Login: [],
    userToken: ""
}
export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                Login: action.payload
            }
        case 'SETTOKEN':
            return {
                ...state,
                userToken: action.payload
            }
        default:
            return state
    }
}