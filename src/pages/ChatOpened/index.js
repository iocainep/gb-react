import React from 'react';
import {ChatsList} from '../../components/ChatsList';
import {Grid} from '@material-ui/core';
import {MenuBar} from "../../components/MenuBar";
import {CurrentChat} from "../../components/CurrentChat"

export const ChatOpened = () => {

    return (
        <Grid container spacing={3}>
            <MenuBar/>
            <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <ChatsList/>
            </Grid>
            <Grid item xs={12} md={4}>
                <CurrentChat/>
            </Grid>
            </Grid>
        </Grid>
    )
}