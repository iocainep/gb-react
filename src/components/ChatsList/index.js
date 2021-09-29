import React from "react";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {CONTACTS} from '../mock';

export const ChatsList = () => {

    return (
        <Paper>
            <List>
                {
                    CONTACTS.map((item, i) => (
                        <Link
                            key={i}
                            to={`/chats/${item.id}`}
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                                display: 'flex'
                            }}
                        >
                            <ListItem
                                key={i}
                                id={item.id}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt={item.name}
                                        src={item.avatar}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.name}/>
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </Paper>
    )
}