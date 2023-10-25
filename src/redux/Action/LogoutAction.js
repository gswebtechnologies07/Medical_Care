import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const LogoutAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/logout',data).then((response) => {
            console.log("response_in_LogoutAction", response)
            dispatch({
                type: Types.LOGOUT,
                payload: response?.token
            })
            return response?.token;
        }).catch((error) => {
            console.log("error_in_LogoutAction", error);
            // return error?.response?.data?.message
        })
    }
}
