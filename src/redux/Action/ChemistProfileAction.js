// import * as Types from '../Types/Types'
// import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

// export const ChemistProfileAction = (data) => {
//     return async (dispatch) => {
//         return AXIOS_INSTANCE.post('/add/chemist', data).then((response) => {
//             console.log(data, "response_in__ChemistProfileAction", response)
//             dispatch({
//                 type: Types.CHEMIST_PROFILE_REGISTER,
//                 payload: response?.data
//             })
//             return response?.data;
//         }).catch((error) => {
//             console.log("error_in_LoginAction", error);
//             // return error?.response?.data?.message
//         })
//     }
// }


// export const GetProfileAction = (data) => {
//     return async (dispatch) => {
//         return AXIOS_INSTANCE.post('get/chemist', data).then((response) => {
//             console.log(data, "GetProfileAction", response)
//             dispatch({
//                 type: Types.GET_CHEMIST,
//                 payload: response?.data
//             })
//             return response?.data;
//         }).catch((error) => {
//             console.log("error_in_get/chemist", error);
//             // return error?.response?.data?.message
//         })
//     }
// }


import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';


export const getAllChemistProfile = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.get('/get/all-chemists', data).then((response) => {
            console.log(data, "getChemistProfileAction", response)
            dispatch({
                type: Types.GET_ALL_CHEMIST_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_getChemistProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}


export const Chemist_ProfileAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/add/chemist', data).then((response) => {
            console.log( "Laboratory_ProfileAction", response)
            dispatch({
                type: Types.CHEMIST_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}
export const GetChemistProfileAction = (id) => {
    
    return async (dispatch) => {
        return AXIOS_INSTANCE.get(`/show/chemist/${id}`).then((response) => {
            // console.log( id,"Get_Laboratory_ProfileAction", response)
            dispatch({
                type: Types.GET_CHEMIST_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}


export const EditChemistProfileAction = (data,Id) => {
    console.log(Id,"EditChemistProfileActionid")
    return async (dispatch) => {
        return AXIOS_INSTANCE.post(`/edit/chemist/${Id}`,data).then((response) => {
            console.log( Id,"EditChemistProfileAction", response)
            dispatch({
                type: Types.EDIT_CHEMIST_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_EditChemistProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}