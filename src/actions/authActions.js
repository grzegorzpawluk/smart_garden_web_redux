import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://smartgarden.ddns.net/php-login-registration-api/',
});

export function loginUser(data) {
  // console.log(`loginUser: ${data.password}`);
  return (dispatch) => {
    return Axios.post('login.php', {
      user: data.login,
      pass: data.password,
    }).then((res) => {
      const token = res.data.token;
      localStorage.setItem('loginToken', token);
    });
  };
}
