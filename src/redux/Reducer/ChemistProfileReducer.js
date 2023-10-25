const initialState = {
    ChemistProfileRegister: [],
    GetChemistProfile: [],
    EditChemistProfile :[]

}
export const ChemistProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHEMIST_PROFILE':
            return {
                ...state,
                ChemistProfileRegister: action.payload
            }
        default:
            return state
    }
}

export const GetChemistProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CHEMIST_PROFILE':
            return {
                ...state,
                GetChemistProfile: action.payload
            }
        default:
            return state
    }
}
export const EditChemistProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_CHEMIST_PROFILE':
            return {
                ...state,
                EditChemistProfile: action.payload
            }
        default:
            return state
    }
}