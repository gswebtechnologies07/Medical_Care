const initialState = {
  Login: null,
  userToken: '',
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(' update', action.payload);
      console.log('_reducerUpdate', {
        ...state,
        Login: action.payload,
      });
      return {
        ...state,
        Login: action.payload,
      };
    case 'SETTOKEN':
      return {
        ...state,
        userToken: action.payload,
      };
    default:
      return state;
  }
};