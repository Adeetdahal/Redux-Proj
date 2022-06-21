import * as actions from 'constants/userConstants';

let initialState = {
  isAuthenticated: false,
  //   loading: true,
  login: {
    email: '',
    password: '',
  },
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        login: action.payload,
        isAuthenticated: true,
      };

    case actions.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
