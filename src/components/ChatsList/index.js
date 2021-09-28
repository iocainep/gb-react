import React from "react";
import faker from "faker";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper} from '@material-ui/core';

export const ChatsList = () => {

    const contacts = Array.from({length: 10}).map((_, index) => ({
        id: index + 1,
        name: faker.name.firstName(),
        avatar: faker.image.avatar()
    }));

    return (
        <Paper>
            <List>
                {
                    contacts.map((item, i) => (
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
                    ))
                }
            </List>
        </Paper>
    )
}