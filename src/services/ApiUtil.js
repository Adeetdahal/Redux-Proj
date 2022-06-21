import { useAlert } from 'react-alert';
import store from 'redux/store';

let baseUrl = 'https://62a7715097b6156bff8e8e7d.mockapi.io/';

const parseJSON = (response) => {
  return new Promise((resolve, reject) => {
    if (response.status === 204) {
      resolve({
        status: response.status,
        ok: response.ok,
        json: {},
      });
    }
    // response.blob
    response
      .json()
      .then((json) => {
        resolve({
          status: response.status,
          ok: response.ok,
          json,
        });
      })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error);
        return reject(error);
      });
  });
};

export const post = async (url, opts = {}) => {
  let { headers = {}, body, showError = false } = opts;
  let {
    auth: { token },
  } = store.getState();
  console.log(token);

  // if (token) {
  //   headers.Authorization = headers.Authorization || 'Bearer' + token;
  // }
  url = `${baseUrl}${url}`;

  let options = {
    headers: {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  };

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((res) => {
        return parseJSON(res);
      })
      .then((response) => {
        if (response.ok) {
          return resolve(response.json);
        }

        if (showError) {
          let alert = useAlert();
          alert.error('error', JSON.stringify(response.json));
        }
        return reject(response);
      })
      .catch((error) => {
        reject({
          networkError: error,
        });
      });
  });
};
