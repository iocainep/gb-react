import React from 'react';
import {MenuBar} from "../../components/MenuBar";
import {Grid} from "@material-ui/core";
import {ProfileStatus} from "../../components/ProfileStatus";

export const Profile = () => {

    return (
        <Grid container spacing={3}>
            <MenuBar/>
            <Grid item xs={12}>
                <h2>Here you can activate or deactivate your profile</h2>
            </Grid>
            <Grid item xs={12}>
                <ProfileStatus/>
            </Grid>
        </Grid>

    )
}