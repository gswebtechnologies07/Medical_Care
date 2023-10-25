import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const NewPasswordAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/reset-password',data).then((response) => {
            console.log("NewPasswordActionas", response)
            dispatch({
                type: Types.NEW_PASSWORD,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_LoginAction", error);
            // return error?.response?.data?.message
        })
    }
}
