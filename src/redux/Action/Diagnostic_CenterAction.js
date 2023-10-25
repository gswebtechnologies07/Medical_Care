// import * as Types from '../Types/Types'
// import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

// export const DiagnosticCenterAction = (data) => {
//     return async (dispatch) => {
//         return AXIOS_INSTANCE.post('/add/diaganostic', data).then((response) => {
//             console.log(data, "DiagnosticCenterAction", response)
//             dispatch({
//                 type: Types.DIAGNOSTIC_PROFILE_REGISTER,
//                 payload: response?.data
//             })
//             return response?.data;
//         }).catch((error) => {
//             console.log("error_in_DiagnosticCenterAction", error);
//             // return error?.response?.data?.message
//         })
//     }
// }


import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const Diaganostic_ProfileAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/add/diaganostic', data).then((response) => {
            console.log( "Laboratory_ProfileAction", response)
            dispatch({
                type: Types.DIAGNOSTIC_PROFILE_REGISTER,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}
export const GetDiaganosticProfileAction = (id) => {
    
    return async (dispatch) => {
        return AXIOS_INSTANCE.get(`/show/diaganostic/${id}`).then((response) => {
            // console.log( id,"Get_Laboratory_ProfileAction", response)
            dispatch({
                type: Types.GET_DIAGNOSTIC_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}


export const EditDiaganosticProfileAction = (data,Id) => {
    console.log(Id,"behjfbehbeh")
    return async (dispatch) => {
        return AXIOS_INSTANCE.post(`/edit/diaganostic/${Id}`,data).then((response) => {
            console.log( Id,"Laboratory_EditdiaganosticProfileAction", response)
            dispatch({
                type: Types.EDIT_DIAGNOSTIC_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}
