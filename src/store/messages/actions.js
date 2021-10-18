import {AUTHORS} from "../../components/mock";
import {db} from '../../services/firebase';

export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
})

export const sendMessageToBot = (chatId, message) => {
    return () => {
        db.ref('messages').child(chatId).push(message)

        let timer = setTimeout(() => {
            db
                .ref('messages')
                .child(chatId)
                .push({
                    id: `message${Date.now()}`,
                    author: AUTHORS.BOT,
                    text: 'Привет, я - бот!',
                })

            clearTimeout(timer)
        }, 1500)
    }
}

export const subscribeOnMessageChange = (chatId) => {
    return (dispatch, getState) => {
        db
            .ref('messages')
            .child(chatId)
            .on('child_added', (snapshot) => {
                console.log('child_added', snapshot.val())

                dispatch(addMessage(chatId, snapshot.val()))
            })

        db
            .ref('messages')
            .child(chatId)
            .on('child_changed', (snapshot) => {
                console.log('child_changed', snapshot.val())

                dispatch(addMessage(chatId, snapshot.val()))
            })
    }
}