import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const SignupAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/register', data).then((response) => {
            console.log(data, "response_in_RegisterAction", response)
            dispatch({
                type: Types.SIGNUP,
                payload: response?.data
            })
            return response?.data
        }).catch((error) => {
            console.log( "error_in_RegisterAction", error)
            // return error;
        })
    }
}