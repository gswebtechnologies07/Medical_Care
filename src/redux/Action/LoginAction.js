import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const LoginAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/login', data).then((response) => {
            console.log(data, "response_in__LoginAction", response?.data)
            dispatch({
                type: Types.LOGIN,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_LoginAction", error);
            // return error?.response?.data?.message
        })
    }
}

export const setToken = (token) => {
    dispatch({
        type: Types.LOGIN,
        payload: token
    })
}
