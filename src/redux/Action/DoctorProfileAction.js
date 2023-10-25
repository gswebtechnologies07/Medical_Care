import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const DoctorProfileAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/add/doctor', data).then((response) => {
            console.log(data, "DoctorProfileAction",response)
            dispatch({
                type: Types.DOCTOR_PROFILE_REGISTER,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}
export const GetDoctorProfileAction = (id) => {
    
    return async (dispatch) => {
        return AXIOS_INSTANCE.get(`/show/doctor/${id}`).then((response) => {
            console.log( id,"GetDoctorProfileAction", response)
            dispatch({
                type: Types.GET_DOCTOR,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}

export const EditDoctorProfileAction = (data,Id) => {
    console.log(Id,"EditDoctorProfileActionid")
    return async (dispatch) => {
        return AXIOS_INSTANCE.post(`/edit/doctor/${Id}`,data).then((response) => {
            console.log( Id,"EditDoctorProfileAction", response)
            dispatch({
                type: Types.EDIT_DOCTOR_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_EditDoctorProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}