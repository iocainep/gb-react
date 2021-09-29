import React from 'react';
import {ChatsList} from '../../components/ChatsList';
import {CurrentChat} from '../../components/CurrentChat';
import {Grid} from '@material-ui/core';
import {MenuBar} from "../../components/MenuBar";
import {useParams} from "react-router";

export const ChatOpened = () => {

    const {chatId} = useParams();

    return (
        <Grid container spacing={3}>
                <MenuBar/>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={3}>
                <ChatsList/>
            </Grid>
            <Grid item xs={9}>
                {
                    (chatId > 0)
                    ? <CurrentChat/>
                    : <div>Please choose one of chats</div>
                }
            </Grid>
        </Grid>
    )
}