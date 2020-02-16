import {combineReducers} from "redux";
import { reducer as form } from "redux-form"

import usersList from "./userList"
import loading from "./loading";
import user from "./user";

const rootReducer = combineReducers({
    form,
    usersList, loading, user
});

export default rootReducer;