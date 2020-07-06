import axios from 'axios';

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const registerUser = (payload, redirectUrl, error) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        error(false);
        window.location.href = redirectUrl;
      })
      .catch((error) => {
        error(true);
        dispatch(setError(error));
      });
  };
};

export const loginUser = ({ email, password }, redirectUrl, error) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in/',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    }).then(({ data }) => {
      document.cookie = `id=${data.user.id}`;
      document.cookie = `name=${data.user.name}`;
      document.cookie = `email=${data.user.email}`;
      document.cookie = `type=${data.user.type}`;
      dispatch(loginRequest(data.user));
    }).then(() => {
      error(false);
      window.location.href = redirectUrl;
    }).catch((err) => {
      error(true);
      dispatch(setError(err));
    });
  };
};
