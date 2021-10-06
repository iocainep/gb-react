import React from 'react';
import {ChatsList} from '../../components/ChatsList';
import {CurrentChat} from '../../components/CurrentChat';
import {Grid} from '@material-ui/core';
import {MenuBar} from "../../components/MenuBar";

export const ChatOpened = () => {

    return (
        <Grid container spacing={3}>
                <MenuBar/>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={3}>
                <ChatsList/>
            </Grid>
            <Grid item xs={9}>
                <CurrentChat/>
            </Grid>
        </Grid>

    )
}