import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const GetPendingOrderAction = (id) => {
    
    return async (dispatch) => {
        return AXIOS_INSTANCE.get(`/get/pending-order/${id}`).then((response) => {
            console.log( id,"GetPendingOrderAction", response)
            dispatch({
                type: Types.GET_PENDING_ORDER,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}
export const GetCompletedOrderAction = (id) => {
    
    return async (dispatch) => {
        return AXIOS_INSTANCE.get(`/get/completed-order/${id}`).then((response) => {
            console.log( id,"GetCompletedOrderAction", response)
            dispatch({
                type: Types.GET_COMPLETED_ORDER,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_GetCompletedOrderAction", error);
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