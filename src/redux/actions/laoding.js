import {HIDE_LOADER, SHOW_ERROR, SHOW_LOADER} from "./types";

export const showLoader = () => ({
    type: SHOW_LOADER,
    payload: {}
});

export const hideLoader = () => ({
    type: HIDE_LOADER,
    payload: {}
});

export const showError = (errorText) => ({
    type: SHOW_ERROR,
    payload: {errorText}
});