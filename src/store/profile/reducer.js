import {
    CHANGE_IS_AUTHED,
    CHANGE_IS_ONLINE,
} from './actions'

const initialState = {
    name: 'John',
    age: 27,
    isOnline: true,
    isAuthed: false,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IS_ONLINE: {
            return {
                ...state,
                isOnline: action.payload.isOnline,
            }
        }
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed,
            }
        }
        default:
            return state
    }
}