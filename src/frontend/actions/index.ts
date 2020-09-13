import axios from 'axios';

type themeProps = {
  theme: string,
  dispatch: Function,
}

type registerProps = {
  user: {},
  redirectUrl: string,
  dispatch: Function,
  error: Function,
}

type loginProps = {
  user: {
    email: string,
    password: string,
  },
  redirectUrl: string,
  dispatch: Function,
  error: Function,
}

export const setTheme = ({ theme, dispatch }: themeProps) => {
  axios({
    url: '/theme',
    method: 'post',
    data: {
      theme,
    },
  }).then(({ data }) => {
    document.cookie = `theme=${data.theme}`;
    dispatch({ type: 'SET_THEME', theme });
  }).catch((error) => {
    dispatch({ type: 'SET_ERROR', error });
  });
};

export const registerUser = ({ user, redirectUrl, dispatch, error }: registerProps) => {
  axios.post('/auth/sign-up', user)
    .then(({ data }) => {
      dispatch({ type: 'REGISTER_REQUEST', data });
    }).then(() => {
      error(false);
      window.location.href = redirectUrl;
    }).catch((error) => {
      error(true);
      dispatch({ type: 'SET_ERROR', error });
    });
};

export const loginUser = ({ user, redirectUrl, dispatch, error }: loginProps) => {
  axios({
    url: '/auth/sign-in/',
    method: 'post',
    auth: {
      username: user.email,
      password: user.password,
    },
  }).then(({ data }) => {
    document.cookie = `id=${data.user.id}`;
    document.cookie = `name=${data.user.name}`;
    document.cookie = `email=${data.user.email}`;
    document.cookie = `type=${data.user.type}`;
    document.cookie = `theme=${data.user.theme}`;
    dispatch({ type: 'LOGIN_REQUEST', data });
  }).then(() => {
    error(false);
    window.location.href = redirectUrl;
  }).catch((err) => {
    error(true);
    dispatch({ type: 'SET_ERROR', err });
  });
};
