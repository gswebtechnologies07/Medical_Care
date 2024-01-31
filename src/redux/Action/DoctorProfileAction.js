import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';
import {useSelector} from 'react-redux';

export const DoctorProfileAction = data => {
  return async dispatch => {
    return AXIOS_INSTANCE.post('/add/doctor', data)
      .then(response => {
        console.log(data, 'DoctorProfileAction', response);
        dispatch({
          type: Types.DOCTOR_PROFILE_REGISTER,
          payload: response?.data,
        });
        return response?.data;
      })
      .catch(error => {
        console.log('error_in_Laboratory_ProfileAction', error);
        // return error?.response?.data?.message
      });
  };
};
export const GetDoctorProfileAction = id => {
  return async dispatch => {
    return AXIOS_INSTANCE.get(`/show/doctor/${id}`)
      .then(response => {
        console.log(id, 'GetDoctorProfileAction', response);
        dispatch({
          type: Types.GET_DOCTOR,
          payload: response?.data,
        });
        return response?.data;
      })
      .catch(error => {
        console.log('error_in_Laboratory_ProfileAction', error);
        // return error?.response?.data?.message
      });
  };
};
export const GetProfileAction = id => {
  return async dispatch => {
    return AXIOS_INSTANCE.get(`/show/profile/${id}`)
      .then(response => {
        console.log(id, 'GetProfileAction', response);
        dispatch({
          type: Types.GET_DOCTOR,
          payload: response?.data,
        });
        return response?.data;
      })
      .catch(error => {
        console.log('error_in_GetProfileAction', error);
        // return error?.response?.data?.message
      });
  };
};

export const EditDoctorProfileAction = (data, Id) => {
  console.log(Id, 'EditDoctorProfileActionid');
  return async dispatch => {
    return AXIOS_INSTANCE.post(`/edit/doctor/${Id}`, data)
      .then(response => {
        console.log(Id, 'EditDoctorProfileAction', response);
        dispatch({
          type: Types.EDIT_DOCTOR_PROFILE,
          payload: response?.data,
        });
        return response?.data;
      })
      .catch(error => {
        console.log('error_in_EditDoctorProfileAction', error);
        // return error?.response?.data?.message
      });
  };
};
export const getProfileAction = id => {
  return async dispatch => {
    return AXIOS_INSTANCE.get(`/show/doctor/${id}`)
      .then(response => {
        console.log(id, 'getProfileAction', response);
        dispatch({
          type: Types.GET_DOCTOR_PROFILE,
          payload: response?.data,
        });
        return response?.data;
      })
      .catch(error => {
        console.log('error_in_Laboratory_getProfileAction', error);
        // return error?.response?.data?.message
      });
  };
};

export const UpdateDoctorProfileAction = data => {
  const ID = useSelector(state => state?.LoginReducer?.Login?.user?.id);
  console.log(ID, data, 'update Doctor Action');
  return async () => {
    return AXIOS_INSTANCE.post(`/edit/profile/${LoginData?.user?.id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Platform': 'iOS',
        'X-App-Build-Number': '1.0.0',
      },
    })
      .then(response => {
        console.log(ID, 'update Doctor Action', response);
        return response?.data;
      })
      .catch(error => {
        console.log('error ', error?.response);
        console.log('error_in_UpdateDoctorProfileAction', error);
        // return error?.response?.data?.message
      });
  };
};

