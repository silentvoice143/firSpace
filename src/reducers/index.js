import usersReducer from "./userReducer";
import authReducer from "./authReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  usersReducer,
  authReducer,
});

export default rootReducer;
