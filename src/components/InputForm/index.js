import React, {useRef} from "react";
import * as styles from './index.module.css';
import {TextField, Fab, Grid} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export const InputForm = ({updateData}) => {

    let message = useRef();

    let handleMessage = (event) => {
        event.preventDefault();
        let newMessage = message.current.value;
        updateData(newMessage);
        message.current.value = '';
    }

    let handleKeyPress = (event) => {
        if (event.charCode === 13) {
            handleMessage(event);
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={11}>
                <TextField
                    label="Type Your Message"
                    fullWidth
                    autoFocus
                    inputRef={message}
                    onKeyPress={handleKeyPress}/>
            </Grid>
            <Grid
                item xs={1}
                align="right">
                <Fab color="primary"
                     aria-label="add"
                     onClick={handleMessage}>
                    <SendIcon/>
                </Fab>
            </Grid>
        </Grid>
    );
};