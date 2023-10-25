const initialState = {
    GetChemistProfile: [],
}
export const GetProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CHEMIST':
            return {
                ...state,
                GetChemistProfile: action.payload
            }
        default:
            return state
    }
}