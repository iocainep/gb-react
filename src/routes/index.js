import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ChatOpened} from "../pages/ChatOpened";
import {Profile} from "../pages/Profile";
import {Main} from "../pages/Main";
import {News} from "../pages/News";
import {NotFound} from "../pages/NotFound";
import {LoginPage} from "../pages/LoginPage";
import {useSelector} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)

    return isAuthed ? <Route {...props} /> : <Redirect to="/login"/>
}


export const Routes = () => {

    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Main}
            />
            <PrivateRoute
                exact
                path="/chats"
                component={ChatOpened}/>
            <PrivateRoute
                exact
                path="/profile"
                component={Profile}
            />
            <PrivateRoute
                path="/chats/:chatId"
                render={() => {
                    return <ChatOpened/>
                }}/>
            <Route
                path="/login"
                component={LoginPage}/>
            <Route
                exact
                path="/news"
                component={News}
            />
            <Route
                path="*"
                component={NotFound}
            />
        </Switch>
    )
}