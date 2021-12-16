import {AUTHORS} from "../../components/mock";

export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
})

export const sendMessageToBot = (chatId, message) => {
    return (dispatch, getState) => {
        dispatch(addMessage(chatId, message))

        let timer = setTimeout(() => {
            dispatch(
                addMessage(chatId, {
                    id: `message${Date.now()}`,
                    author: AUTHORS.BOT,
                    text: 'hello, I am bot',
                })
            )

            clearTimeout(timer)
        }, 2000)
    }
}