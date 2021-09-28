import React, {useEffect} from "react";
import * as styles from './index.module.css';
import {InputForm} from "../InputForm";
import {ListItemText,Grid, ListItem, List} from "@material-ui/core";
import faker from "faker";

export const CurrentChat = () => {

    const [messageList, setMessageList] = React.useState([]);

    const updateData = (text) => {
        setMessageList([...messageList, { name: "me", message: text }]);
    }

    useEffect(() => {
            if(messageList.length > 0 &&
                messageList[messageList.length - 1].name === 'me') {
                setTimeout(() => {
                    setMessageList([...messageList, {name: "bot", message: faker.lorem.sentence()}]);
                }, 1500);
            };
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
