import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const Laboratory_ProfileAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/add/laboratory', data).then((response) => {
            console.log( "Laboratory_ProfileAction", response)
            dispatch({
                type: Types.LABORATORY_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}
export const GetLaboratoryProfileAction = (id) => {
    console.log(id,'djkkk')
    
    return async (dispatch) => {
        return AXIOS_INSTANCE.get(`/show/laboratory/${id}`).then((response) => {
            // console.log( id,"Get_Laboratory_ProfileAction", response)
            dispatch({
                type: Types.GET_LABORATORY_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}


export const EditLaboratoryProfileAction = (data,Id) => {
    console.log(Id,"behjfbehbehbgehbidddddd")
    return async (dispatch) => {
        return AXIOS_INSTANCE.post(`/edit/laboratory/${Id}`,data).then((response) => {
            console.log( Id,"Laboratory_EditLaboratoryProfileAction", response)
            dispatch({
                type: Types.EDIT_LABORATORY_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}