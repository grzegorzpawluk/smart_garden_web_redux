import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://smartgarden.ddns.net/php-login-registration-api/',
});

const loggedReducer = async (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      const loginToken = localStorage.getItem('loginToken');

      if (loginToken) {
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + loginToken;

        const { data } = await Axios.get('user-info.php');

        if (data.success && data.user) {
          return true;
        }
      }
      return false;
    default:
      return false;
  }
};

export default loggedReducer;
