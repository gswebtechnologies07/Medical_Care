import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';

export const EditProfileModalAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post('/update/chemist/', data).then((response) => {
            console.log(data, "EditProfileModalAction", response)
            dispatch({
                type: Types.EDIT_PROFILE,
                payload: response?.data
            })
            return response?.data;
        }).catch((error) => {
            console.log("error_in_LoginAction", error);
            // return error?.response?.data?.message
        })
    }
}
