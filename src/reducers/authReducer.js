const token = localStorage.getItem("token");
// console.log(token);

const initialState = {
  isLogin: token ? true : false,
};

// console.log(initialState);

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        isLogin: true,
      };

    case "Logout":
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
