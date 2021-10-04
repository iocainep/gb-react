import {TOGGLE_USER} from "./actions";

export const initialState = {
    isActive: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_USER:
            return {
                ...state,
                isActive: !state.isActive
            }
        default:
            return state
    }
}