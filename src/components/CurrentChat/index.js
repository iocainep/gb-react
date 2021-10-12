import React, {useEffect} from "react";
import * as styles from './index.module.css';
import {InputForm} from "../InputForm";
import {ListItemText,Grid, ListItem, List} from "@material-ui/core";
import {useParams, Redirect} from 'react-router';
import {CONTACTS, CHATS} from '../mock';

export const CurrentChat = (props) => {

    // const [messageList, setMessageList] = React.useState([]);
    //
    // // const updateData = (text) => {
    // //     setMessageList([...messageList, { name: "me", message: text }]);
    // // }
    // //
    // // useEffect(() => {
    // //         if(messageList.length > 0 &&
    // //             messageList[messageList.length - 1].name === 'me') {
    // //             setTimeout(() => {
    // //                 setMessageList([...messageList, {name: "bot", message: faker.lorem.sentence()}]);
    // //             }, 1500);
    // //         };
    // // }, [messageList]);

    const {chatId} = useParams();

    if (chatId > CONTACTS.length) {
        return <Redirect to="/404" />
    }

    return (
        <div>
        {
            <List className={styles.messageList}>
                <ListItem key="1">
                    <Grid container>
                        <Grid item xs={12}>
                            {
                                CHATS[chatId - 1].map((message, i) =>
                                    (message.name === "me")
                                        ? <ListItemText key={i} align="right" primary={message.message}/>
                                        : <ListItemText key={i} align="left" primary={message.message}/>
                                )
                            }
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        }
            <InputForm/>
    </div>
    )
}
