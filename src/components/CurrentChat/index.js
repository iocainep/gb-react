import React from 'react'
import { Redirect, useParams } from 'react-router'
import Message from '../Message'
import { InputForm } from '../InputForm'
import { AUTHORS } from '../mock'
import { useDispatch, useSelector } from 'react-redux'
import { useIsChatExists } from '../../hooks/useIsChatExists'
import { getMessageList } from '../../store/messages';
import { sendMessageToBot, subscribeOnMessageChange} from '../../store/messages';

export const CurrentChat = () => {
    const { chatId } = useParams()

    const messageList = useSelector(getMessageList(chatId))
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(subscribeOnMessageChange(chatId))
    }, [])

    const handleMessageSubmit = (newMessageText) => {
        dispatch(
            sendMessageToBot(chatId, {
                id: `message${Date.now()}`,
                author: AUTHORS.ME,
                text: newMessageText,
            })
        )
    }

    const isChatExists = useIsChatExists({ chatId })

    if (!isChatExists) {
        return <Redirect to="/chats" />
    }

    return (
        <div>
            {messageList.length ? (
                <div className="bordered">
                    {messageList.map((message) => (
                        <Message
                            key={message.id}
                            text={message.text}
                            author={message.author}
                        />
                    ))}
                </div>
            ) : null}

            <InputForm onSubmit={handleMessageSubmit} />
        </div>
    )
}
