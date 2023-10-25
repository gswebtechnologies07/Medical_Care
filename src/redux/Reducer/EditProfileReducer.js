const initialState = {
    EditProfile: [],
}
export const EditProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_PROFILE':
            return {
                ...state,
                EditProfile: action.payload
            }
        default:
            return state
    }
}