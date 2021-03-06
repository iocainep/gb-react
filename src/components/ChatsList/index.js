import React from 'react'
import { useHistory } from 'react-router'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import {InputForm} from '../InputForm'
import * as styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getChatList } from "../../store/chats/";
import {addChatToDatabase, removeChatFromDatabase, subscribeChatsChangings} from '../../store/chats';

export const ChatsList = (props) => {

    const history = useHistory()
    const chats = useSelector(getChatList);
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(subscribeChatsChangings())
    }, [])

    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const handleAddChat = (name) => {
        dispatch(addChatToDatabase(`chat${Date.now()}`, name))
    }

    const handleRemoveChat = (chatId) => {
        dispatch(removeChatFromDatabase(chatId))
    }

    return (
        <div className={styles.chats}>
            <List className={styles.chatsSidebar} subheader={<p>Список чатов</p>}>
                {Object.values(chats).map((chat) => (
                    <div className={styles.chatsSideBarItem} key={chat.id}>
                        <ListItem
                            button
                            component="a"
                            onClick={() => handleChatLinkClick(chat)}
                        >
                            {chat.name}
                        </ListItem>
                        <IconButton
                            variant="contained"
                            onClick={() => handleRemoveChat(chat.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
            </List>

            <InputForm
                label="Имя чата"
                placeholder="Введите имя чата"
                onSubmit={handleAddChat}
            />
        </div>
    )
}