import * as api from 'services/ApiUtil';

//api call for login authentication
export const login = async ({ email, password }) => {
  let response = await api.post('Crud', {
    body: {
      email,
      password,
    },
  });
  return response;
};
