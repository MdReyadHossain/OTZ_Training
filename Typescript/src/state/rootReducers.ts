import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./actions/user/userSlice"
// Combine Reducers
const rootReducer = combineReducers({
    user: userSlice,
});

export default rootReducer;
