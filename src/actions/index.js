export const SignIn = (data) => {
  return {
    type: 'SIGN_IN',
    // payload: data,
  };
};

export const Logout = () => {
  return {
    type: 'LOGOUT',
  };
};
