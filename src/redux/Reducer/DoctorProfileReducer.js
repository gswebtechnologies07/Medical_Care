const initialState = {
    DoctorProfileRegister: [],
    GetDoctorProfile: [],
    EditDoctorProfiles :[]

}
export const DoctorProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DOCTOR_PROFILE_REGISTER':
            return {
                ...state,
                DoctorProfileRegister: action.payload
            }
        default:
            return state
    }
}

export const GetDoctorProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DOCTOR':
            return {
                ...state,
                GetDoctorProfile: action.payload
            }
        default:
            return state
    }
}
export const EditDoctorProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_DOCTOR_PROFILE':
            return {
                ...state,
                EditDoctorProfiles: action.payload
            }
        default:
            return state
    }
}