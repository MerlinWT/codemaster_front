import {combineReducers} from "redux";
import { reducer as form } from "redux-form"

import usersList from "./userList"
import loading from "./loading";

const rootReducer = combineReducers({
    form,
    usersList, loading
});

export default rootReducer;