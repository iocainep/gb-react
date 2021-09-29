import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ChatOpened} from "../pages/ChatOpened";
import {Profile} from "../pages/Profile";
import {Main} from "../pages/Main";
import {NotFound} from "../pages/NotFound";

export const Routes = () => {

    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Main}
            />
            <Route
                exact
                path="/chats"
                component={ChatOpened}/>
            <Route
                exact
                path="/profile"
                component={Profile}
            />
            <Route
                path="/chats/:chatId"
                render={() => {
                    return <ChatOpened />
                }}/>
            <Route
                path="*"
                component={NotFound}
            />
        </Switch>
    )
}