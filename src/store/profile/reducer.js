import { CHANGE_IS_ONLINE } from '../profile/actions'

const initialState = {
    name: 'John',
    age: 27,
    isOnline: true,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IS_ONLINE: {
            return {
                ...state,
                isOnline: action.payload.isOnline,
            }
        }
        default:
            return state
    }
}
