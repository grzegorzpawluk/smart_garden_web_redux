import React, { useState } from 'react';
import LoginStyles from './Login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { loggingIn } from './loginSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const loggingStatus = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);

  const initialState = {
    login: '',
    password: '',
  };

  const [loginData, setLoginData] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const submitForm = (event) => {
    event.preventDefault();
    setAddRequestStatus('pending');

    const resultAction = dispatch(loggingIn(loginData));

    unwrapResult(resultAction);
    setLoginData(initialState);
  };

  const onChangeValue = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoggedIn) {
    return <Redirect to="/weather" />;
  }

  return (
    <div className={LoginStyles.homepage}>
      <div id="panel" className={LoginStyles['form-login']}>
        <br></br>
        <h1>Logowanie</h1>
        <br></br>
        <form onSubmit={submitForm} noValidate>
          <div>
            <input
              className={LoginStyles['form-input']}
              id="username"
              name="login"
              type="text"
              required
              placeholder="Wprowadź login"
              value={loginData.login}
              onChange={onChangeValue}
            />
          </div>
          <br></br>
          <div>
            <input
              className={LoginStyles['form-input']}
              id="password"
              name="password"
              type="password"
              required
              placeholder="Wprowadź hasło"
              value={loginData.password}
              onChange={onChangeValue}
            />
          </div>
          {errorMsg && <div>{errorMsg}</div>}
          <br></br>
          <div>
            <button className={LoginStyles['form-button']} type="submit">
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
