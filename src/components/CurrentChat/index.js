import React, {useEffect} from "react";
import * as styles from './index.module.css';
import {InputForm} from "../InputForm";
import {ListItemText,Grid, ListItem, List} from "@material-ui/core";

export const CurrentChat = ({}) => {

    const [messageList, setMessageList] = React.useState([]);

    const updateData = (text) => {
        setMessageList([...messageList, { name: "me", message: text }]);
    }

    useEffect(() => {
        if(messageList.length > 0) {
            let lastMessageAuthor = messageList[messageList.length - 1].name;
            if(lastMessageAuthor === 'me') {
                let botMessage = {name: "bot", message: "i am bot"};
                let delay = Math.random() * 2000;
                setTimeout(() => {
                    setMessageList([...messageList, botMessage]);
                }, delay);
            };
        }
    }, [messageList]);

    return (
        <div>
        {
            <List className={styles.messageList}>
                <ListItem key="1">
                    <Grid container>
                        <Grid item xs={12}>
                            {
                                messageList.map((message, i) =>
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
            <InputForm updateData={updateData}/>
    </div>
    )

}
