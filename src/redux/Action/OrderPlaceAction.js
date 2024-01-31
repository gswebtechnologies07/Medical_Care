import * as Types from '../Types/Types'
import AXIOS_INSTANCE from '../../../AxiosInstance/Axios';
import axios from 'axios';

export const OrderPlaceAction = data => {
  return async dispatch => {
    return AXIOS_INSTANCE.post('add/order', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Platform': 'iOS',
        'X-App-Build-Number': '1.0.0',
      },
    })
      .then(response => {
        console.log(' OrderPlaceAction', response);
        dispatch({
          type: Types.ORDER_PLACE,
          payload: response?.data?.order,
        });
        return response?.data;
      })
      .catch(error => {
        console.log('error response', error?.response);
        console.log('error request', error?.request);
        console.log('error config', error?.config);
        console.log('error code', error?.code);
        console.log('dataaa', data);
        // return error?.response?.data?.message
      });
  };
};
// Assuming you have an action type constant defined as Types.EDIT_ORDER_PLACE

export const EditOrderPlaceAction = (data, Id) => {
  console.log(Id, 'id');

  return async dispatch => {
    try {
      const response = await AXIOS_INSTANCE.post(`/edit/order/${Id}`, data);

      console.log(Id, 'EditOrderPlaceAction', response?.data);
      const updatedData = {
        ...response?.data,
        order_status: 'completed',
      };

      dispatch({
        type: Types.EDIT_ORDER_PLACE,
        payload: updatedData,
      });

      return updatedData;
    } catch (error) {
      console.log('error_in_EditOrderPlaceAction', error);

      throw error;
    }
  };
};

export const GetOrderDetails = Id => {
  console.log(Id, 'ididdatafddfsdfd');
  return async dispatch => {
    return AXIOS_INSTANCE.get(`/edit/order/${Id}`)
      .then(response => {
        console.log(Id, 'GetOrderDetails', response);
        dispatch({
          type: Types.GET_ORDER_DETAILS,
          payload: response?.data,
        });
        return response?.data;
      })
      .catch(error => {
        console.log('error_in_GetOrderDetails', error);
        // return error?.response?.data?.message
      });
  };
};





