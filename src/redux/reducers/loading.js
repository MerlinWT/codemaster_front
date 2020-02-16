import {HIDE_LOADER, SHOW_ERROR, SHOW_LOADER} from "../actions/types";

const initialState = {
    loading: {
        pending: false,
        error: false,
        errorText: '',
    }
};

const loading = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER: {
            return {
                loading: {
                    pending: true,

                    error: false,
                    errorText: '',
                }
            }
        }
        case HIDE_LOADER: {
            return {
                loading: {
                    pending: false,

                    error: false,
                    errorText: '',
                }
            }
        }
        case SHOW_ERROR: {
            return {
                loading: {
                    pending: false,

                    error: true,
                    errorText: action.payload.errorText,
                }
            }
        }
        default:
            return state
    }
};

export default loading;