import {combineReducers} from "redux";

import usersList from "./userList"
import loading from "./loading";
import user from "./user";

const rootReducer = combineReducers({
    usersList, loading, user
});

export default rootReducer;