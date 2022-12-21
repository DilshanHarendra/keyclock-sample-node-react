import {combineReducers} from 'redux';

import usersSlice from "./usersSlice.js";

const rootReducer = combineReducers({
  user: usersSlice,
});
export default rootReducer;
