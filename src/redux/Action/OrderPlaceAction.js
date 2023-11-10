import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';


export const OrderPlaceAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('add/order', data).then((response) => {
            console.log("OrderPlaceAction", response)
            dispatch({
                type: Types.ORDER_PLACE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_Laboratory_ProfileAction", error);
            // return error?.response?.data?.message
        })
    }
}
export const EditOrderPlaceAction = (data, Id) => {
    console.log(Id, 'ididdata')
    return async (dispatch) => {
        return AXIOS_INSTANCE.post(`/edit/order/${Id}`, data).then((response) => {
            console.log(Id, "EditOrderPlaceAction", response)
            dispatch({
                type: Types.EDIT_ORDER_PLACE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_EditOrderPlaceAction", error);
            // return error?.response?.data?.message
        })
    }
}





