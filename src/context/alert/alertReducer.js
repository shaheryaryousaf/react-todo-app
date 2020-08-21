import { SET_ALERT, REMOVE_ALERT } from "../types";

export default function (state, action) {

    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return {
                msg: payload
            }
        case REMOVE_ALERT:
            return {
                msg: null
            }
        default:
            return state
    }

}