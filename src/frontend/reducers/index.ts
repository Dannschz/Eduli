const setLocalStorage = (key: string, value: string) => {
  try {
    typeof window !== 'undefined' ? window.localStorage.setItem(key, value) : new Error('window undefined');
  } catch (error) {
    console.log(error.message);
  }
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'SET_THEME':
      setLocalStorage('theme', action.theme);
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
