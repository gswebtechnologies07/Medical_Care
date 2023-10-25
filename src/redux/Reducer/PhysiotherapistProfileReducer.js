const initialState = {
    PhysiotherapistProfileRegister: [],
    GetPhysiotherapistProfile: [],
    EditPhysiotherapistProfile:[]
}
export const Physiotherapist_ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PHYSIOTHERAPIST_PROFILE':
            return {
                ...state,
                PhysiotherapistProfileRegister: action.payload
            }
        default:
            return state
    }
}
export const GetPhysiotherapistProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHYSIOTHERAPIST_PROFILE':
            return {
                ...state,
                GetPhysiotherapistProfile: action.payload
            }
        default:
            return state
    }
}
export const EditPhysiotherapistProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_PHYSIOTHERAPIST_PROFILE':
            return {
                ...state,
                EditPhysiotherapistProfile: action.payload
            }
        default:
            return state
    }
}