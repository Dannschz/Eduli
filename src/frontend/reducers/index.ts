import axios from 'axios';

type themeProps = {
  theme: string,
}

const setTheme = ({ theme }: themeProps) => {
  axios({
    url: '/theme',
    method: 'post',
    data: {
      theme,
    },
  }).then(({ data }) => {
    const { theme } = data;
    document.cookie = `theme=${theme}`;
  }).catch((error) => {
    console.log(error);
  });
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'SET_THEME':
      setTheme(action);
      return {
        ...state,
        theme: action.theme,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
