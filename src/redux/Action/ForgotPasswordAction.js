import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const ForgotPasswordAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/forgot-password', data).then((response) => {
            console.log( "response_in__forgotAction", response?.data)
            dispatch({
                type: Types.FORGOT_PASSWORD,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_LoginAction", error);
            // return error?.response?.data?.message
        })
    }
}
