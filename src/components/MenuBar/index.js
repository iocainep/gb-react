import * as React from 'react';
import * as styles from './index.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FeedIcon from '@mui/icons-material/Feed';
import {NavLink} from 'react-router-dom';
import {auth} from '../../services/firebase';
import { useDispatch } from 'react-redux'
import { changeIsAuthed } from '../../store/profile';

export const MenuBar = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', { user })

            dispatch(changeIsAuthed(Boolean(user)))
        })
    }, [])

    const handleSignOut = (e) => {
        e.preventDefault()

        auth.signOut()
    }

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
                        <li>
                            <NavLink
                                style={{
                                    textDecoration: 'none',
                                }}
                                exact
                                to="/news">
                                <FeedIcon
                                    className={styles.MuiSvgIcon}
                                    />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/login">Login
                            </NavLink>
                        </li>
                        <li>
                            <a href="/" onClick={handleSignOut}>
                                Sign out
                            </a>
                        </li>
                    </ul>
            </AppBar>
        </Box>
    );
}