const initialState = {
    DiaganosticProfileRegister: [],
    GetDiaganosticProfile: [],
    EditDiaganosticProfile:[]
}
export const Diaganostic_ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DIAGNOSTIC_PROFILE_REGISTER':
            return {
                ...state,
                DiaganosticProfileRegister: action.payload
            }
        default:
            return state
    }
}
export const GetDiaganosticProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DIAGNOSTIC_PROFILE':
            return {
                ...state,
                GetDiaganosticProfile: action.payload
            }
        default:
            return state
    }
}
export const EditDiaganosticProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_DIAGNOSTIC_PROFILE':
            return {
                ...state,
                EditDiaganosticProfile: action.payload
            }
        default:
            return state
    }
}