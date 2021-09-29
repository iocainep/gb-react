import * as React from 'react';
import * as styles from './index.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {NavLink} from 'react-router-dom';

export const MenuBar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                    <ul className={styles.menuList}>
                        <li>
                            <NavLink
                                style={{
                                    textDecoration: 'none',
                                }}
                                exact
                                to="/">
                                <HomeIcon
                                    className={styles.MuiSvgIcon}
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                style={{
                                    textDecoration: 'none',
                                }}
                                exact
                                to="/profile">
                                <AccountBoxIcon
                                    className={styles.MuiSvgIcon}
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                style={{
                                    textDecoration: 'none',
                                }}
                                exact
                                to="/chats">
                                <ChatIcon
                                    className={styles.MuiSvgIcon}
                                />
                            </NavLink>
                        </li>
                    </ul>
            </AppBar>
        </Box>
    );
}