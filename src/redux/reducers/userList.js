import {SET_USERS_LIST} from "../actions/types";

const initialState = { usersList: [] };

const usersList = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_LIST: {
            return {
                usersList: action.payload.usersList
            }
        }
        default:
            return state;
    }
};

export default usersList;