export const LoginUser = () => ({
  type: "Login",
});

export const LogoutUser = () => {
  return {
    type: "Logout",
  };
};

export const fetchAllUsersRequest = () => ({
  type: "FETCH_ALL_USERS_REQUEST",
});

export const fetchAllUsersSuccess = (users) => ({
  type: "FETCH_ALL_USERS_SUCCESS",
  payload: users,
});

export const fetchAllUsersFailure = (error) => ({
  type: "FETCH_ALL_USERS_FAILURE",
  payload: error,
});
