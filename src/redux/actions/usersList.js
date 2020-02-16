import {SET_USERS_LIST} from "./types";

export const setUserList = (usersList) => {
    return {
        type: SET_USERS_LIST,
        payload: {
            usersList
        }
    }
};