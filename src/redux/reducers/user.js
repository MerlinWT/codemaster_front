import {SET_USER} from "../actions/types";

const initialState = {
    user: {
        id: undefined,
        username: 'username',
        first_name: 'first name',
        last_name: 'last name',
        created: undefined,
    },
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            console.log(action.payload.user);

            return {
                user: action.payload.user
            }
        }
        default:
            return state;
    }
};

export default user;