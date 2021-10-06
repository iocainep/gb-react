import { ADD_CHAT, REMOVE_CHAT } from './actions';

const initialState = {}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.payload.id]: action.payload,
            }
        }
        case REMOVE_CHAT: {
            delete state[action.payload.chatId]

            return {
                ...state,
            }
        }
        default:
            return state
    }
}
