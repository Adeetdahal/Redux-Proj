import { LOGIN_REQUEST, SET_TOKEN } from '../../constants/userConstants';

export const isLoggedin = (cred) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: cred,
    });
  };
};

export const setToken = (response) => {
  return (dispatch) => {
    dispatch({
      type: SET_TOKEN,
      payload: response,
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT',
    });
  };
};
