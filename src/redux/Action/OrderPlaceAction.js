import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';


export const OrderPlaceAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('add/order', data).then((response) => {
            console.log( "OrderPlaceAction", response)
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




