import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const Physiotherapist_ProfileAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/add/physiotherapy', data).then((response) => {
            console.log( "Physiotherapist_ProfileAction", response)
            dispatch({
                type: Types.PHYSIOTHERAPIST_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Physiotherapist_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}
export const GetPhysiotherapistProfileAction = (id) => {
    
    return async (dispatch) => {
        return AXIOS_INSTANCE.get(`/show/physiotherapy/${id}`).then((response) => {
            console.log( id,"GetPhysiotherapistProfileAction", response)
            dispatch({
                type: Types.GET_PHYSIOTHERAPIST_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}


export const EditPhysiotherapistProfileAction = (data,Id) => {
    console.log(Id,"behjiddd")
    return async (dispatch) => {
        return AXIOS_INSTANCE.post(`/edit/physiotherapy/${Id}`,data).then((response) => {
            console.log( Id,"Physiotherapist_EditLaboratoryProfileAction", response)
            dispatch({
                type: Types.EDIT_PHYSIOTHERAPIST_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}