import AXIOS_INSTANCE from "../../../AxiosInstance/Axios";
import * as Types from '../Types/Types'

export const OtpVerificationAction = (data) => {
    return async (dispatch) => {
        return AXIOS_INSTANCE.post("/verify/pin", data).then((response) => {
            console.log(data, "response_in_OTPverifyAction", response)
            dispatch({
                type: Types.OTP_VERIFICTION,
                payload: response
            })
            return response
        }).catch((error) => {
            console.log("error_in_getResendOTP", error);
        })
    }
}