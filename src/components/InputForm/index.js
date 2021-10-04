import React, {useRef} from "react";
import PropTypes from 'prop-types';
import {TextField, Fab, Grid} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export const InputForm = ({updateData}) => {

    // let message = useRef();
    //
    // let handleMessage = (event) => {
    //     event.preventDefault();
    //     updateData(message.current.value);
    //     message.current.value = '';
    // }
    //
    // let handleKeyPress = (event) => {
    //     if (event.charCode === 13) {
    //         handleMessage(event);
    //     }
    // };

    return (
        <Grid container spacing={3}>
            <Grid item xs={11}>
                <TextField
                    label="Type Your Message"
                    fullWidth
                    autoFocus/>
            </Grid>
            <Grid
                item xs={1}
                align="right">
                <Fab color="primary"
                     aria-label="add">
                    <SendIcon/>
                </Fab>
            </Grid>
        </Grid>
    );
};

InputForm.propTypes = {
    updateData: PropTypes.string
};