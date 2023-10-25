const initialState = {
    LaboratoryProfileRegister: [],
    GetLaboratoryProfile: [],
    EditLaboratoryProfile:[]
}
export const Laboratory_ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LABORATORY_PROFILE':
            return {
                ...state,
                LaboratoryProfileRegister: action.payload
            }
        default:
            return state
    }
}
export const GetLaboratoryProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LABORATORY_PROFILE':
            return {
                ...state,
                GetLaboratoryProfile: action.payload
            }
        default:
            return state
    }
}
export const EditLaboratoryProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_LABORATORY_PROFILE':
            return {
                ...state,
                EditLaboratoryProfile: action.payload
            }
        default:
            return state
    }
}