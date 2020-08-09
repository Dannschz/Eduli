import axios from 'axios';

export const loginRequest = (payload: any) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload: any) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload: any) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const setError = (payload: any) => ({
  type: 'SET_ERROR',
  payload,
});

export const registerUser = (payload: any, redirectUrl: string, error: Function) => {
  return (dispatch: any) => {
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

type user = {
  email: string,
  password: string,
}

export const loginUser = ({ email, password }: user, redirectUrl: string, error: Function) => {
  return (dispatch: any) => {
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
